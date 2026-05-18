"use client";

import { useState } from "react";

import { postJson } from "@/lib/form-utils";

const quickLinks = ["Admissions", "Scholarships", "Placements", "Campus Life", "Events"];
const navLinks = ["About", "Programs", "Admissions", "Campus", "Careers", "Contact"];

type FooterFormState = {
  name: string;
  email: string;
  phone: string;
  question: string;
};

type FooterFormErrors = Partial<Record<keyof FooterFormState, string>>;

const initialFooterForm: FooterFormState = {
  name: "",
  email: "",
  phone: "",
  question: "",
};

const indianMobilePattern = /^[6-9]\d{9}$/;

export function HomeFooter() {
  const [form, setForm] = useState<FooterFormState>(initialFooterForm);
  const [errors, setErrors] = useState<FooterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFieldChange = (field: keyof FooterFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const nextErrors: FooterFormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone is required.";
    } else if (!indianMobilePattern.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid Indian mobile number.";
    }

    if (!form.question.trim()) {
      nextErrors.question = "Question is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await postJson<{ leadId: string; message: string }>("/api/leads/contact", {
        firstName: form.name.trim(),
        lastName: ".",
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: "General Enquiry",
        message: form.question.trim(),
      });

      const isSuccessful = response.success === true || (response as { ok?: boolean }).ok === true;
      if (!isSuccessful) {
        setSubmitError(response.error?.message ?? "Unable to submit your question right now.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Unable to submit your question right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black px-4 py-10 text-white md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <p className="text-3xl font-bold">SVGOI</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/75">
              Swami Vivekanand Group of Institutes, Village Pamaur, Rajpura, Patiala, Punjab.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 grid gap-3">
              {quickLinks.map((item) => (
                <li key={item} className="text-sm font-medium text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold">Question Form</h3>
            {isSuccess ? (
              <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-200">
                ✓ Thanks! Your enquiry has been received.
              </div>
            ) : (
              <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
                  />
                  {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(event) => handleFieldChange("email", event.target.value)}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email}</p> : null}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(event) => handleFieldChange("phone", event.target.value)}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
                  />
                  {errors.phone ? <p className="mt-1 text-xs text-red-300">{errors.phone}</p> : null}
                </div>
                <div>
                  <textarea
                    placeholder="Your Question"
                    value={form.question}
                    onChange={(event) => handleFieldChange("question", event.target.value)}
                    className="min-h-21 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
                  />
                  {errors.question ? <p className="mt-1 text-xs text-red-300">{errors.question}</p> : null}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-bold transition duration-200 hover:scale-105 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {submitError ? <p className="text-xs text-red-300">{submitError}</p> : null}
              </form>
            )}
          </section>

          <section>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="mt-4 grid gap-3">
              {navLinks.map((item) => (
                <li key={item} className="text-sm font-medium text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              FB
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              IG
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              IN
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
