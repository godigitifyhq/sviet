"use client";

import Image from "next/image";
import { useState } from "react";

import { postJson } from "@/lib/form-utils";

type ScholarshipFormState = {
  name: string;
  phone: string;
  email: string;
  course: string;
  academicScore: string;
  familyIncomeLPA: string;
  category: "" | "GENERAL" | "OBC" | "SC" | "ST";
};

type ScholarshipFormErrors = Partial<
  Record<keyof ScholarshipFormState, string>
>;

type ScholarshipEligibility = {
  eligible: boolean;
  percentage: number;
  reason: string;
  conditions: string[];
};

const initialScholarshipForm: ScholarshipFormState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  academicScore: "",
  familyIncomeLPA: "",
  category: "",
};

const indianMobilePattern = /^[6-9]\d{9}$/;

function splitNameForScholarship(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ") || ".";

  return { firstName, lastName };
}

export function ScholarshipSection() {
  const [form, setForm] = useState<ScholarshipFormState>(
    initialScholarshipForm,
  );
  const [errors, setErrors] = useState<ScholarshipFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [eligibilityResult, setEligibilityResult] =
    useState<ScholarshipEligibility | null>(null);

  const handleFieldChange = (
    field: keyof ScholarshipFormState,
    value: string,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value as ScholarshipFormState[keyof ScholarshipFormState],
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const nextErrors: ScholarshipFormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone is required.";
    } else if (!indianMobilePattern.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid Indian mobile number.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!form.course.trim()) {
      nextErrors.course = "Course is required.";
    }

    const academic = Number(form.academicScore);
    if (!form.academicScore.trim()) {
      nextErrors.academicScore = "Academic score is required.";
    } else if (Number.isNaN(academic) || academic < 0 || academic > 100) {
      nextErrors.academicScore = "Academic score must be between 0 and 100.";
    }

    const income = Number(form.familyIncomeLPA);
    if (!form.familyIncomeLPA.trim()) {
      nextErrors.familyIncomeLPA = "Family income is required.";
    } else if (Number.isNaN(income) || income < 0 || income > 100) {
      nextErrors.familyIncomeLPA = "Family income must be between 0 and 100.";
    }

    if (!form.category) {
      nextErrors.category = "Category is required.";
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
      const { firstName, lastName } = splitNameForScholarship(form.name);
      const response = await postJson<{
        leadId: string;
        eligibility: ScholarshipEligibility;
      }>("/api/leads/scholarship", {
        firstName,
        lastName,
        email: form.email.trim(),
        phone: form.phone.trim(),
        course: form.course,
        familyIncomeLPA: Number(form.familyIncomeLPA),
        academicScore: Number(form.academicScore),
        category: form.category,
      });

      const isSuccessful =
        response.success === true || (response as { ok?: boolean }).ok === true;
      if (!isSuccessful || !response.data?.eligibility) {
        setSubmitError(
          response.error?.message ?? "Unable to check eligibility right now.",
        );
        return;
      }

      setEligibilityResult(response.data.eligibility);
      setIsSuccess(true);
    } catch {
      setSubmitError("Unable to check eligibility right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const percentage = eligibilityResult?.percentage ?? 0;
  const isPartiallyEligible =
    (eligibilityResult?.eligible ?? false) &&
    percentage >= 30 &&
    percentage < 60;
  const eligibilityTone = !eligibilityResult
    ? ""
    : !eligibilityResult.eligible
      ? "border-red-200 bg-red-50 text-red-800"
      : isPartiallyEligible
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#f7941d]">Find Your Scholarship</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Check your scholarship eligibility based on your academic
            performance and family income.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {isSuccess && eligibilityResult ? (
            <div
              className={`w-full max-w-md rounded-2xl border-2 p-8 ${
                !eligibilityResult.eligible
                  ? "border-red-300 bg-red-50 text-red-800"
                  : isPartiallyEligible
                    ? "border-yellow-300 bg-yellow-50 text-yellow-800"
                    : "border-[#f7941d] bg-blue-50 text-[#1E40AF]"
              }`}
            >
              <p className="font-semibold">Scholarship Eligibility</p>
              <p className="mt-4 text-5xl font-bold">
                {eligibilityResult.percentage}%
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                {eligibilityResult.reason}
              </p>
              {eligibilityResult.conditions.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {eligibilityResult.conditions.map((condition) => (
                    <li key={condition} className="flex gap-2 text-sm">
                      <span>✓</span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            <form
              className="flex w-full max-w-md flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-name"
                >
                  Full Name
                </label>
                <input
                  id="scholarship-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(event) =>
                    handleFieldChange("name", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-phone"
                >
                  Phone Number
                </label>
                <input
                  id="scholarship-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={form.phone}
                  onChange={(event) =>
                    handleFieldChange("phone", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-email"
                >
                  Email Address
                </label>
                <input
                  id="scholarship-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(event) =>
                    handleFieldChange("email", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-course"
                >
                  Select Your Course
                </label>
                <select
                  id="scholarship-course"
                  name="course"
                  value={form.course}
                  onChange={(event) =>
                    handleFieldChange("course", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                >
                  <option value="" disabled>
                    Select your course
                  </option>
                  <option value="btech">B.Tech</option>
                  <option value="mtech">M.Tech</option>
                  <option value="mba">MBA</option>
                  <option value="bca">BCA</option>
                  <option value="mca">MCA</option>
                  <option value="bpharm">B.Pharm</option>
                  <option value="bba">BBA</option>
                  <option value="bhmct">BHMCT</option>
                  <option value="polytechnic">Polytechnic</option>
                </select>
                {errors.course ? (
                  <p className="mt-1 text-sm text-red-600">{errors.course}</p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-academic-score"
                >
                  Academic Score (%)
                </label>
                <input
                  id="scholarship-academic-score"
                  name="academicScore"
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Enter percentage (0-100)"
                  value={form.academicScore}
                  onChange={(event) =>
                    handleFieldChange("academicScore", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                />
                {errors.academicScore ? (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.academicScore}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-family-income"
                >
                  Family Annual Income (LPA)
                </label>
                <input
                  id="scholarship-family-income"
                  name="familyIncomeLPA"
                  type="number"
                  min={0}
                  placeholder="Enter family income in lakhs"
                  value={form.familyIncomeLPA}
                  onChange={(event) =>
                    handleFieldChange("familyIncomeLPA", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                />
                {errors.familyIncomeLPA ? (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.familyIncomeLPA}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-[#6B7280]"
                  htmlFor="scholarship-category"
                >
                  Category
                </label>
                <select
                  id="scholarship-category"
                  name="category"
                  value={form.category}
                  onChange={(event) =>
                    handleFieldChange("category", event.target.value)
                  }
                  className="w-full rounded-lg border border-[#D1D5DB] bg-[#FFFFFF] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#f7941d] focus:ring-2 focus:ring-[#f7941d]/10"
                >
                  <option value="" disabled>
                    Select your category
                  </option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
                {errors.category ? (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#f7941d] px-6 py-3 font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-60"
              >
                <span>
                  {isSubmitting
                    ? "Checking Eligibility..."
                    : "Check My Eligibility"}
                </span>
              </button>
              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}
            </form>
          )}

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-[#f7941d]">RNR Scholarship</span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                SVGOI offers need-cum-merit scholarships to deserving students.
                Check your eligibility in 60 seconds.
              </p>
              <p className="mt-4 font-semibold text-[#f7941d]">
                Up to 100% fee waiver | 500+ scholarships awarded annually
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/img/college/scholarship.png"
                alt="Scholarship eligibility"
                width={700}
                height={300}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
