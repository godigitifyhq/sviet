"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AdmissionsHeroSection } from "@/components/admissions/admissions-hero-section";
import { type ProgramOption, type ProgramsApiResponse } from "@/components/admissions/types";
import { useApplyLeadForm } from "@/components/admissions/use-apply-lead-form";

export function PlacementsHeroSection() {
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
  const { form, errors, isSubmitting, submitError, isSuccess, handleFieldChange, handleSubmit } =
    useApplyLeadForm(programs, initialProgramSlug);

  return (
    <AdmissionsHeroSection
      form={form}
      errors={errors}
      programs={programs}
      isSubmitting={isSubmitting}
      submitError={submitError}
      isSuccess={isSuccess}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
      breadcrumb="/ Placements"
      titleLineOne="Training &"
      titleLineTwo="Placement"
      description="Build your career with industry-focused training, interview readiness, and strong placement support."
      ctaLabel="Explore opportunities"
    />
  );
}
