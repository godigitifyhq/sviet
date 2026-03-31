"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { ProgramFinderForm } from "@/components/forms/program-finder";
import { postJson } from "@/lib/form-utils";

const containerClass = "mx-auto max-w-[1280px] px-6";
const inputClass = "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700 outline-none";
const primaryButtonClass = "rounded-full bg-black px-6 py-3 text-white";

const procedureSteps = [
  {
    title: "Application",
    description: "Fill out the application form with your details and preferred course.",
  },
  {
    title: "Entrance Exam",
    description: "Appear for the entrance evaluation based on the selected program.",
  },
  {
    title: "Document",
    description: "Submit required academic and identity documents for verification.",
  },
];

type ProgramOption = {
  id: string;
  slug: string;
  title: string;
};

type ProgramsApiResponse = {
  success?: boolean;
  data?: ProgramOption[];
};

type ApplyFormState = {
  name: string;
  programId: string;
  phone: string;
  email: string;
};

type ApplyFormErrors = Partial<Record<keyof ApplyFormState, string>>;

const initialApplyForm: ApplyFormState = {
  name: "",
  programId: "",
  phone: "",
  email: "",
};

const indianMobilePattern = /^[6-9]\d{9}$/;

function splitApplyName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ") || ".";

  return { firstName, lastName };
}

function useApplyLeadForm(programs: ProgramOption[], initialProgramSlug?: string | null) {
  const [form, setForm] = useState<ApplyFormState>(initialApplyForm);
  const [errors, setErrors] = useState<ApplyFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!initialProgramSlug || form.programId) {
      return;
    }

    const selected = programs.find((program) => program.slug === initialProgramSlug);

    if (selected) {
      setForm((previous) => ({
        ...previous,
        programId: selected.id,
      }));
    }
  }, [form.programId, initialProgramSlug, programs]);

  const handleFieldChange = (field: keyof ApplyFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const nextErrors: ApplyFormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.programId.trim()) {
      nextErrors.programId = "Course is required.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!indianMobilePattern.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid Indian mobile number.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
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
      const { firstName, lastName } = splitApplyName(form.name);
      const selectedProgram = programs.find((program) => program.id === form.programId);

      const response = await postJson<{ leadId: string; message: string }>("/api/leads/apply", {
        firstName,
        lastName,
        email: form.email.trim(),
        phone: form.phone.trim(),
        programId: form.programId,
        programSlug: selectedProgram?.slug,
        course: selectedProgram?.title,
      });

      const isSuccessful = response.success === true || (response as { ok?: boolean }).ok === true;
      if (!isSuccessful) {
        setSubmitError(response.error?.message ?? "Unable to submit right now. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    isSubmitting,
    submitError,
    isSuccess,
    handleFieldChange,
    handleSubmit,
  };
}

function HeroForm({ programs, initialProgramSlug }: { programs: ProgramOption[]; initialProgramSlug?: string | null }) {
  const {
    form,
    errors,
    isSubmitting,
    submitError,
    isSuccess,
    handleFieldChange,
    handleSubmit,
  } = useApplyLeadForm(programs, initialProgramSlug);

  if (isSuccess) {
    return (
      <div className="w-90 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm font-medium text-emerald-700">
        ✓ Application received! Our team will contact you within 24 hours.
      </div>
    );
  }

  return (
    <form className="w-90  rounded-2xl border border-gray-100 p-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Input text"
            value={form.name}
            onChange={(event) => handleFieldChange("name", event.target.value)}
            className={inputClass}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>
        <div>
          <select
            title="Course"
            className={inputClass}
            value={form.programId}
            onChange={(event) => handleFieldChange("programId", event.target.value)}
          >
            <option value="" disabled>
              Selection text
            </option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.title}
              </option>
            ))}
          </select>
          {errors.programId ? <p className="mt-1 text-xs text-red-600">{errors.programId}</p> : null}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Input text"
            value={form.phone}
            onChange={(event) => handleFieldChange("phone", event.target.value)}
            className={inputClass}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>
        <div>
          <input
            type="email"
            placeholder="Input text"
            value={form.email}
            onChange={(event) => handleFieldChange("email", event.target.value)}
            className={inputClass}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-2 flex w-full items-center justify-between text-base font-semibold ${primaryButtonClass}`}
        >
          {isSubmitting ? "Submitting..." : "Apply Now"}
          <span>↗</span>
        </button>
        {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
      </div>
    </form>
  );
}

function InitialApplicationForm({
  programs,
  initialProgramSlug,
}: {
  programs: ProgramOption[];
  initialProgramSlug?: string | null;
}) {
  const {
    form,
    errors,
    isSubmitting,
    submitError,
    isSuccess,
    handleFieldChange,
    handleSubmit,
  } = useApplyLeadForm(programs, initialProgramSlug);

  if (isSuccess) {
    return (
      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm font-medium text-emerald-700">
        ✓ Application received! Our team will contact you within 24 hours.
      </div>
    );
  }

  return (
    <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="text-sm text-gray-500">Name</label>
      <input
        type="text"
        placeholder="Input text"
        value={form.name}
        onChange={(event) => handleFieldChange("name", event.target.value)}
        className={inputClass}
      />
      {errors.name ? <p className="-mt-2 text-xs text-red-600">{errors.name}</p> : null}
      <label className="text-sm text-gray-500">Course</label>
      <select
        title="Course"
        className={inputClass}
        value={form.programId}
        onChange={(event) => handleFieldChange("programId", event.target.value)}
      >
        <option value="" disabled>
          Selection text
        </option>
        {programs.map((program) => (
          <option key={program.id} value={program.id}>
            {program.title}
          </option>
        ))}
      </select>
      {errors.programId ? <p className="-mt-2 text-xs text-red-600">{errors.programId}</p> : null}
      <label className="text-sm text-gray-500">Phone</label>
      <input
        type="tel"
        placeholder="Input text"
        value={form.phone}
        onChange={(event) => handleFieldChange("phone", event.target.value)}
        className={inputClass}
      />
      {errors.phone ? <p className="-mt-2 text-xs text-red-600">{errors.phone}</p> : null}
      <label className="text-sm text-gray-500">Email</label>
      <input
        type="email"
        placeholder="Input text"
        value={form.email}
        onChange={(event) => handleFieldChange("email", event.target.value)}
        className={inputClass}
      />
      {errors.email ? <p className="-mt-2 text-xs text-red-600">{errors.email}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-2 flex w-full items-center justify-between text-base font-semibold ${primaryButtonClass}`}
      >
        {isSubmitting ? "Submitting..." : "Apply Now"}
        <span>↗</span>
      </button>
      {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
    </form>
  );
}

function Timeline() {
  return (
    <div className="relative mt-26">
      <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[#1A1C4B] md:block" />
      <div className="absolute left-2 -top-3 hidden h-10 w-0.5 bg-[#1A1C4B] md:block" />
      <div className="grid gap-10 md:grid-cols-3">
        {procedureSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <div className="mb-3 flex items-center gap-4">
              <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${
                  index === 0 ? "bg-[#1A1C4B]" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </span>
              <p className="text-base font-semibold text-gray-700">{step.title}</p>
            </div>
            <p className="max-w-65 text-sm leading-relaxed text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute -top-18 left-0 hidden rounded-2xl bg-[#1A1C4B] px-4 py-3 text-sm font-medium text-white md:block">
        You Are
        <br />
        Here
      </div>
    </div>
  );
}

function EligibilityPanel({ programs }: { programs: ProgramOption[] }) {
  return (
    <div className="mt-10 grid gap-10 md:grid-cols-3">
      <div>
        <h3 className="text-2xl font-semibold">CHOOSE COURSE</h3>
        <ul className="mt-4 divide-y divide-gray-200 border-b border-gray-200">
          {programs.map((course, index) => (
            <li
              key={course.id}
              className={`py-2 text-base ${index === 0 ? "font-semibold text-orange-500" : "text-gray-600"}`}
            >
              {course.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-4xl font-bold">CRITERIA</h2>
        <div className="mt-6 space-y-4 text-base font-semibold text-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <span>10TH</span>
            <span>12TH</span>
          </div>
          <p>ENTRANCE TEST SCORE</p>
          <p>ENTRANCE TEST SCORE</p>
          <p>ENTRANCE TEST SCORE</p>
        </div>
        <p className="mt-10 text-base text-gray-600">
          *Technology Enhanced Experimental Learning
          <br />
          With Advance Learning Centers & Labs.
        </p>
      </div>

      <div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-100">
          <Image
            src="/assets/img/college/scholarship.png"
            alt="Eligibility"
            width={360}
            height={480}
            className="h-105 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
          <button
            type="button"
            className={`absolute bottom-5 left-5 flex items-center gap-2 text-base font-semibold ${primaryButtonClass}`}
          >
            APPLY NOW
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdmissionsPage() {
  const searchParams = useSearchParams();
  const [programs, setPrograms] = useState<ProgramOption[]>([]);

  useEffect(() => {
    let active = true;

    const loadPrograms = async () => {
      try {
        const response = await fetch("/api/programs", { cache: "no-store" });
        const payload = (await response.json()) as ProgramsApiResponse;

        if (!active) {
          return;
        }

        if (!response.ok || !payload.success || !Array.isArray(payload.data)) {
          setPrograms([]);
          return;
        }

        setPrograms(payload.data);
      } catch {
        if (active) {
          setPrograms([]);
        }
      }
    };

    loadPrograms();

    return () => {
      active = false;
    };
  }, []);

  const initialProgramSlug = useMemo(() => searchParams.get("program"), [searchParams]);

  return (
    <div className="bg-white">
      <section className="relative min-h-140  overflow-hidden">
        <Image src="/assets/img/college/auditorium.png" alt="Admissions" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 " />

        <div className={`relative flex h-full flex-col mt-14 py-16 ${containerClass}`}>
          <div className="max-w-md">
            <h1 className="text-6xl font-bold leading-tight text-[#F58E35]">
              ADMISSIONS
              <br />
              OPEN
            </h1>
            <p className="mt-4 max-w-md text-2xl text-white">
              Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
            </p>
          </div>

          <div className="mt-8 md:absolute md:right-6 md:top-1/2 md:mt-0 md:-translate-y-1/2">
            <HeroForm programs={programs} initialProgramSlug={initialProgramSlug} />
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">
          ADMISSION
          <br />
          PROCEDURE
        </h2>
        
          <Timeline />
     
      </section>

      <section className={`${containerClass} py-16`}>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">INITIAL APPLICATION</h3>
            <InitialApplicationForm programs={programs} initialProgramSlug={initialProgramSlug} />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/assets/img/college/main_gate.png"
              alt="Campus preview"
              width={760}
              height={420}
              className="h-90 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <button
              type="button"
              aria-label="Play"
              className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">
          FIND YOUR OWN
          <br />
          PROGRAM
        </h2>
        <div className="mt-8">
          <ProgramFinderForm />
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">ELIGIBILITY CRITERIA</h2>
        <p className="mt-2 max-w-3xl text-lg text-gray-700">
          Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
        </p>
        <EligibilityPanel programs={programs} />
      </section>
    </div>
  );
}
