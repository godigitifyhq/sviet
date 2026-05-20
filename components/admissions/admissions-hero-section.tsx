import Image from "next/image";
import Link from "next/link";

import type {
  ApplyFormErrors,
  ApplyFormState,
  ProgramOption,
} from "@/components/admissions/types";

type AdmissionsHeroSectionProps = {
  form: ApplyFormState;
  errors: ApplyFormErrors;
  programs: ProgramOption[];
  isSubmitting: boolean;
  submitError: string;
  isSuccess: boolean;
  onFieldChange: (field: keyof ApplyFormState, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  breadcrumb?: string;
  titleLineOne?: string;
  titleLineTwo?: string;
  description?: string;
  ctaLabel?: string;
};

const inputClass =
  "w-full rounded-md border border-[#d8d8dd] bg-white px-3 py-2 text-sm text-[#222] outline-none transition focus:border-[#2563EB]";

export function AdmissionsHeroSection({
  form,
  errors,
  programs,
  isSubmitting,
  submitError,
  isSuccess,
  onFieldChange,
  onSubmit,
  breadcrumb = "/ Admissions",
  titleLineOne = "Admissions at",
  titleLineTwo = "SVGOI",
  description = "Where Your Future Begins. Step into a learning environment designed to transform ambition into achievement. SVGOI offers a structured, transparent, and student-friendly admission process focused on helping you unlock the right opportunities for your career.",
  ctaLabel = "Apply Now",
}: AdmissionsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0e1230]">
      <Image
        src="/assets/img/banner/AddmissionBanner.jpeg"
        alt="Admissions"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/35" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-36 md:grid-cols-[1fr_360px] md:px-6 md:pb-20 md:pt-40 lg:pb-24 lg:pt-44">
        <div className="text-white">
          <p className="text-sm font-medium text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            {breadcrumb}
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
            {titleLineOne}
            <br />
            {titleLineTwo}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/85 md:text-base">
            {description}
          </p>
          <button
            type="button"
            className="mt-8 inline-flex rounded-md bg-[#f7941d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
          >
            {ctaLabel}
          </button>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-2xl md:p-6">
          <h2 className="text-2xl font-bold text-[#111]">
            Want to know more? Let&apos;s talk.
          </h2>
          <p className="mt-1 text-sm text-[#555]">
            Drop your details. We&apos;ll guide your next step.
          </p>

          {isSuccess ? (
            <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              You&apos;re in. Our admissions team will connect with you within
              24 hours.
            </div>
          ) : (
            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#333]">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(event) =>
                    onFieldChange("name", event.target.value)
                  }
                  className={inputClass}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#333]">
                  Program
                </label>
                <select
                  title="Program"
                  className={inputClass}
                  value={form.programId}
                  onChange={(event) =>
                    onFieldChange("programId", event.target.value)
                  }
                >
                  <option value="" disabled>
                    Select program
                  </option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.title}
                    </option>
                  ))}
                </select>
                {errors.programId ? (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.programId}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#333]">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="(000) 000-0000"
                  value={form.phone}
                  onChange={(event) =>
                    onFieldChange("phone", event.target.value)
                  }
                  className={inputClass}
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#333]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(event) =>
                    onFieldChange("email", event.target.value)
                  }
                  className={inputClass}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-md bg-[#f7941d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Call me back"}
              </button>
              {submitError ? (
                <p className="text-sm text-red-600">{submitError}</p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
