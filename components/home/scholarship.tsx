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

type ScholarshipFormErrors = Partial<Record<keyof ScholarshipFormState, string>>;

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
  const [form, setForm] = useState<ScholarshipFormState>(initialScholarshipForm);
  const [errors, setErrors] = useState<ScholarshipFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<ScholarshipEligibility | null>(null);

  const handleFieldChange = (field: keyof ScholarshipFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value as ScholarshipFormState[keyof ScholarshipFormState] }));
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
      const response = await postJson<{ leadId: string; eligibility: ScholarshipEligibility }>("/api/leads/scholarship", {
        firstName,
        lastName,
        email: form.email.trim(),
        phone: form.phone.trim(),
        course: form.course,
        familyIncomeLPA: Number(form.familyIncomeLPA),
        academicScore: Number(form.academicScore),
        category: form.category,
      });

      const isSuccessful = response.success === true || (response as { ok?: boolean }).ok === true;
      if (!isSuccessful || !response.data?.eligibility) {
        setSubmitError(response.error?.message ?? "Unable to check eligibility right now.");
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
  const isPartiallyEligible = (eligibilityResult?.eligible ?? false) && percentage >= 30 && percentage < 60;
  const eligibilityTone = !eligibilityResult
    ? ""
    : !eligibilityResult.eligible
      ? "border-red-200 bg-red-50 text-red-800"
      : isPartiallyEligible
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {isSuccess && eligibilityResult ? (
            <div className={`w-full max-w-md rounded-2xl border p-6 ${eligibilityTone}`}>
              <p className="text-sm font-semibold">Scholarship Eligibility</p>
              <p className="mt-3 text-5xl font-bold">{eligibilityResult.percentage}%</p>
              <p className="mt-3 text-sm leading-relaxed">{eligibilityResult.reason}</p>
              {eligibilityResult.conditions.length > 0 ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                  {eligibilityResult.conditions.map((condition) => (
                    <li key={condition}>{condition}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            <form className="flex w-full max-w-md flex-col gap-4" onSubmit={handleSubmit}>
              <label className="text-xs text-gray-600" htmlFor="scholarship-name">
                Name
              </label>
              <input
                id="scholarship-name"
                name="name"
                type="text"
                placeholder="Input text"
                value={form.name}
                onChange={(event) => handleFieldChange("name", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              {errors.name ? <p className="-mt-2 text-xs text-red-600">{errors.name}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-phone">
                Phone
              </label>
              <input
                id="scholarship-phone"
                name="phone"
                type="tel"
                placeholder="Input text"
                value={form.phone}
                onChange={(event) => handleFieldChange("phone", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              {errors.phone ? <p className="-mt-2 text-xs text-red-600">{errors.phone}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-email">
                Email
              </label>
              <input
                id="scholarship-email"
                name="email"
                type="email"
                placeholder="Input text"
                value={form.email}
                onChange={(event) => handleFieldChange("email", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              {errors.email ? <p className="-mt-2 text-xs text-red-600">{errors.email}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-course">
                Course
              </label>
              <select
                id="scholarship-course"
                name="course"
                value={form.course}
                onChange={(event) => handleFieldChange("course", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              >
                <option value="" disabled>
                  Selection text
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
              {errors.course ? <p className="-mt-2 text-xs text-red-600">{errors.course}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-academic-score">
                Academic Score (%)
              </label>
              <input
                id="scholarship-academic-score"
                name="academicScore"
                type="number"
                min={0}
                max={100}
                placeholder="0-100"
                value={form.academicScore}
                onChange={(event) => handleFieldChange("academicScore", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              {errors.academicScore ? <p className="-mt-2 text-xs text-red-600">{errors.academicScore}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-family-income">
                Family Income (LPA)
              </label>
              <input
                id="scholarship-family-income"
                name="familyIncomeLPA"
                type="number"
                min={0}
                placeholder="Enter family income"
                value={form.familyIncomeLPA}
                onChange={(event) => handleFieldChange("familyIncomeLPA", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              {errors.familyIncomeLPA ? <p className="-mt-2 text-xs text-red-600">{errors.familyIncomeLPA}</p> : null}

              <label className="text-xs text-gray-600" htmlFor="scholarship-category">
                Category
              </label>
              <select
                id="scholarship-category"
                name="category"
                value={form.category}
                onChange={(event) => handleFieldChange("category", event.target.value)}
                className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="GENERAL">GENERAL</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              {errors.category ? <p className="-mt-2 text-xs text-red-600">{errors.category}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-between gap-3 rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-900 disabled:opacity-60"
              >
                <span className="text-lg font-semibold">{isSubmitting ? "Checking..." : "Check Now"}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
            </form>
          )}

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-3xl font-bold text-black md:text-right md:text-4xl">
              RNR Scholarship - Rewarding Merit & Need
            </h2>
            <p className="text-center text-sm text-gray-600 md:text-right">
              SVIET offers need-cum-merit scholarships to deserving students. Check your eligibility in 60 seconds.
            </p>
            <p className="text-center text-sm font-semibold text-gray-900 md:text-right">
              Up to 100% fee waiver | 500+ scholarships awarded annually
            </p>
          <Image src={'/assets/img/line_vector.png'} className="mr-0 ml-auto" width={300} height={200} alt="line" style={{ width: "auto" }} />
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/img/college/scholarship.png"
                alt="Scholarship eligibility"
                width={700}
                height={300}
                className=" w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
