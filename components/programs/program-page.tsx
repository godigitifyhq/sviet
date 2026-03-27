import { ProgramAlumniSection } from "@/components/programs/alumni";
import { ProgramComparisonSection } from "@/components/programs/comparison";
import { ProgramCtaSection } from "@/components/programs/cta";
import { ProgramCurriculumSection } from "@/components/programs/curriculum";
import { ProgramFacilitiesSection } from "@/components/programs/facilities";
import { ProgramFitSection } from "@/components/programs/fit";
import { ProgramHeroSection } from "@/components/programs/hero";
import { ProgramHighlightsSection } from "@/components/programs/highlights";
import { ProgramOutcomesSection } from "@/components/programs/outcomes";
import { ProgramRecruitersSection } from "@/components/programs/recruiters";

export function ProgramDetailPage() {
  return (
    <div className="bg-background text-[#111]">
      <ProgramHeroSection />
      <ProgramOutcomesSection />
      <ProgramRecruitersSection />
      <ProgramHighlightsSection />
      <ProgramFitSection />
      <ProgramAlumniSection />
      <ProgramCurriculumSection />
      <ProgramFacilitiesSection />
      <ProgramComparisonSection />
      <ProgramCtaSection />
    </div>
  );
}
