"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AdmissionsHeroSection } from "@/components/admissions/admissions-hero-section";
import { AdmissionsRelatedLinksSection } from "@/components/admissions/admissions-related-links-section";
import { AdmissionsStudyOverviewSection } from "@/components/admissions/admissions-study-overview-section";
import { AdmissionsValueGridSection } from "@/components/admissions/admissions-value-grid-section";
import { AdmissionsCareerProgramsSection } from "@/components/admissions/admissions-career-programs-section";
import { AdmissionsRecognitionsSection } from "@/components/admissions/admissions-recognitions-section";
import { AdmissionsEnrichingWaysSection } from "@/components/admissions/admissions-enriching-ways-section";
import { AdmissionsHowToApplySection } from "@/components/admissions/admissions-how-to-apply-section";
import { InternationalOpportunitiesSection } from "@/components/international/international-opportunities-section";
import { type ProgramOption, type ProgramsApiResponse } from "@/components/admissions/types";
import { useApplyLeadForm } from "@/components/admissions/use-apply-lead-form";

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
  const { form, errors, isSubmitting, submitError, isSuccess, handleFieldChange, handleSubmit } =
    useApplyLeadForm(programs, initialProgramSlug);

  return (
    <div className="bg-white text-[#111]">
      <AdmissionsHeroSection
        form={form}
        errors={errors}
        programs={programs}
        isSubmitting={isSubmitting}
        submitError={submitError}
        isSuccess={isSuccess}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
      <AdmissionsRelatedLinksSection />
      <AdmissionsStudyOverviewSection />
      <AdmissionsValueGridSection />
      <AdmissionsCareerProgramsSection programs={programs} />
      <AdmissionsRecognitionsSection />
      <AdmissionsEnrichingWaysSection />
      <AdmissionsHowToApplySection />
      <InternationalOpportunitiesSection />
    </div>
  );
}
