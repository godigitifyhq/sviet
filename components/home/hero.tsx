"use client";

import Image from "next/image";
import { useState } from "react";

import { postJson } from "@/lib/form-utils";

type RequestFormState = {
  fullName: string;
  email: string;
  phone: string;
};

type RequestFormErrors = Partial<Record<keyof RequestFormState, string>>;

const initialRequestForm: RequestFormState = {
  fullName: "",
  email: "",
  phone: "",
};

const indianMobilePattern = /^[6-9]\d{9}$/;

function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ") || ".";

  return { firstName, lastName };
}

export function HeroSection() {
  const [requestForm, setRequestForm] = useState<RequestFormState>(initialRequestForm);
  const [requestErrors, setRequestErrors] = useState<RequestFormErrors>({});
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [requestSuccess, setRequestSuccess] = useState(false);

  const handleRequestFormChange = (field: keyof RequestFormState, value: string) => {
    setRequestForm((prev) => ({ ...prev, [field]: value }));
    setRequestErrors((prev) => ({ ...prev, [field]: "" }));
    setRequestError("");
  };

  const validateRequestForm = () => {
    const nextErrors: RequestFormErrors = {};

    if (!requestForm.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!requestForm.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!requestForm.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!indianMobilePattern.test(requestForm.phone.trim())) {
      nextErrors.phone = "Enter a valid Indian mobile number.";
    }

    setRequestErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleRequestSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateRequestForm()) {
      return;
    }

    setRequestLoading(true);
    setRequestError("");

    try {
      const { firstName, lastName } = splitFullName(requestForm.fullName);

      const response = await postJson<{ leadId: string; message: string }>("/api/leads/callback", {
        firstName,
        lastName,
        email: requestForm.email.trim(),
        phone: requestForm.phone.trim(),
      });

      const isSuccessful = response.success === true || (response as { ok?: boolean }).ok === true;

      if (!isSuccessful) {
        setRequestError(response.error?.message ?? "Unable to submit right now. Please try again.");
        return;
      }

      setRequestSuccess(true);
      setRequestForm(initialRequestForm);
    } catch {
      setRequestError("Unable to submit right now. Please try again.");
    } finally {
      setRequestLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="relative w-full overflow-hidden">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6 px-4 py-8">
          <div className="relative w-full h-80 overflow-hidden rounded-lg">
            <Image
              src="/assets/img/banner_hero.jpg"
              alt="SVIET Banner"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full max-w-md space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">Want to know more?</h2>
              <p className="mt-2 text-sm text-[#6B7280]">Discover more information about the program</p>
            </div>

            {requestSuccess ? (
              <div className="rounded-lg border border-emerald-800 bg-emerald-900/30 p-4 text-sm font-medium text-emerald-300">
                ✓ Thank you! Our team will contact you within 24 hours.
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleRequestSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={requestForm.fullName}
                    onChange={(event) => handleRequestFormChange("fullName", event.target.value)}
                    className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  {requestErrors.fullName ? <p className="mt-1 text-xs text-red-600">{requestErrors.fullName}</p> : null}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={requestForm.email}
                    onChange={(event) => handleRequestFormChange("email", event.target.value)}
                    className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  {requestErrors.email ? <p className="mt-1 text-xs text-red-600">{requestErrors.email}</p> : null}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2.5">
                      <span className="text-lg">🇮🇳</span>
                      <span className="text-sm font-medium text-[#111827]">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={requestForm.phone}
                      onChange={(event) => handleRequestFormChange("phone", event.target.value)}
                      className="flex-1 rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  {requestErrors.phone ? <p className="mt-1 text-xs text-red-600">{requestErrors.phone}</p> : null}
                </div>

                <button
                  type="submit"
                  disabled={requestLoading}
                  className="w-full rounded-lg bg-[#6366F1] px-4 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#4F46E5] disabled:opacity-60"
                >
                  {requestLoading ? "Submitting..." : "Request Callback"}
                </button>

                {requestError ? <p className="text-sm text-red-600">{requestError}</p> : null}
              </form>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full h-full min-h-200 overflow-hidden">
          {/* Full Background Image */}
          <Image
            src="/assets/img/banner_hero.jpg"
            alt="SVIET Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          {/* Form Overlay on Right */}
          <div className="absolute inset-0 flex items-center justify-end pr-12">
            <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-2xl">
              <div>
                <h2 className="text-3xl font-bold text-[#111827]">Want to know more?</h2>
                <p className="mt-2 text-base text-[#6B7280]">Discover more information about the program</p>
              </div>

              {requestSuccess ? (
                <div className="rounded-lg border border-emerald-800 bg-emerald-900/30 p-4 text-sm font-medium text-emerald-300">
                  ✓ Thank you! Our team will contact you within 24 hours.
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleRequestSubmit}>
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-semibold text-[#111827] mb-2">
                      Full name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      placeholder="Enter your full name"
                      value={requestForm.fullName}
                      onChange={(event) => handleRequestFormChange("fullName", event.target.value)}
                      className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    {requestErrors.fullName ? <p className="mt-1 text-xs text-red-600">{requestErrors.fullName}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#111827] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={requestForm.email}
                      onChange={(event) => handleRequestFormChange("email", event.target.value)}
                      className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    {requestErrors.email ? <p className="mt-1 text-xs text-red-600">{requestErrors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#111827] mb-2">
                      Phone number
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-3">
                        <span className="text-xl">🇮🇳</span>
                        <select aria-label="Country code" className="bg-transparent text-sm font-medium text-[#111827] outline-none">
                          <option value="+91">+91</option>
                        </select>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(000) 000-0000"
                        value={requestForm.phone}
                        onChange={(event) => handleRequestFormChange("phone", event.target.value)}
                        className="flex-1 rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#111827] placeholder-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    {requestErrors.phone ? <p className="mt-1 text-xs text-red-600">{requestErrors.phone}</p> : null}
                  </div>

                  <button
                    type="submit"
                    disabled={requestLoading}
                    className="w-full rounded-lg bg-[#6366F1] px-6 py-3 text-base font-bold text-white transition duration-200 hover:bg-[#4F46E5] disabled:opacity-60"
                  >
                    {requestLoading ? "Submitting..." : "Request Callback"}
                  </button>

                  {requestError ? <p className="text-sm text-red-600">{requestError}</p> : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

