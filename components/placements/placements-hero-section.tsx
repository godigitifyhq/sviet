"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  type ProgramOption,
  type ProgramsApiResponse,
} from "@/components/admissions/types";
import { useApplyLeadForm } from "@/components/admissions/use-apply-lead-form";

const inputClass =
  "w-full rounded-md border border-[#d8d8dd] bg-white px-3 py-2 text-sm text-[#222] outline-none transition focus:border-[#2563EB]";

export function PlacementsHeroSection() {
  const searchParams = useSearchParams();
  const [programs, setPrograms] = useState<ProgramOption[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const initialProgramSlug = useMemo(
    () => searchParams.get("program"),
    [searchParams],
  );
  const {
    form,
    errors,
    isSubmitting,
    submitError,
    isSuccess,
    handleFieldChange,
    handleSubmit,
  } = useApplyLeadForm(programs, initialProgramSlug);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    if (!isFormOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative aspect-video min-h-64 w-full sm:min-h-96 md:aspect-16/7 md:min-h-130 lg:min-h-155">
          <Image
            src="/assets/img/banner/bannerplace.jpeg"
            alt="SVGOI placements banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            draggable={false}
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-4 md:pointer-events-none md:absolute md:inset-0 md:flex md:items-start md:px-6 md:py-0">
          <div className="w-full md:pointer-events-auto md:pt-24 lg:pt-10">
            <p className="text-xs font-semibold tracking-wide text-[#1f2937] md:text-sm">
              <Link href="/" className="hover:text-[#111827]">
                Home
              </Link>{" "}
              / Placements
            </p>

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={openForm}
                className="w-full rounded-md bg-[#f7941d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d97706] sm:w-auto"
              >
                Explore Placement Opportunities
              </button>
              <button
                type="button"
                onClick={openForm}
                className="w-full rounded-md border border-[#111827] bg-white/90 px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-white sm:w-auto"
              >
                Call: +91 94652 33333
              </button>
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={openForm}
        aria-label="Apply now"
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-l-xl bg-[#f7941d] px-3 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(247,148,29,0.35)] transition hover:bg-[#d97706] lg:block"
      >
        Apply Now
      </button>

      <button
        type="button"
        onClick={openForm}
        aria-label="Apply now"
        className={`fixed inset-x-4 bottom-4 z-50 rounded-xl bg-[#f7941d] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(247,148,29,0.35)] transition hover:bg-[#d97706] lg:hidden ${isFormOpen ? "hidden" : "block"}`}
      >
        Apply Now
      </button>

      {isFormOpen ? (
        <div
          className="fixed inset-0 z-60 flex items-end justify-center bg-black/55 px-3 py-3 md:items-center md:px-4 md:py-8"
          onClick={closeForm}
        >
          <div
            className="max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-4 shadow-2xl sm:rounded-xl sm:p-5 md:max-h-[90vh] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
                  Want to know more? Let&apos;s talk.
                </h2>
                <p className="mt-1 text-sm text-[#555]">
                  Drop your details. We&apos;ll guide your next step.
                </p>
              </div>
              <button
                type="button"
                onClick={closeForm}
                className="rounded-md p-2 text-xl leading-none text-[#555] transition hover:bg-[#f3f4f6] hover:text-[#111]"
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            {isSuccess ? (
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                You&apos;re in. Our admissions team will connect with you within
                24 hours.
              </div>
            ) : (
              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#333]">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(event) =>
                      handleFieldChange("name", event.target.value)
                    }
                    className={inputClass}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#333]">
                    Program
                  </label>
                  <select
                    title="Program"
                    className={inputClass}
                    value={form.programId}
                    onChange={(event) =>
                      handleFieldChange("programId", event.target.value)
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
                    <p className="mt-1 text-xs text-red-600">
                      {errors.programId}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#333]">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="(000) 000-0000"
                    value={form.phone}
                    onChange={(event) =>
                      handleFieldChange("phone", event.target.value)
                    }
                    className={inputClass}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#333]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
                    className={inputClass}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
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
      ) : null}
    </>
  );
}
