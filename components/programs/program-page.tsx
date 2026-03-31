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

export type ProgramDetailData = {
  slug: string;
  title: string;
  department?: string | null;
  durationMonths: number;
  tuitionCents: number;
  mode?: string | null;
  shortDescription: string;
  highlights: string[];
  curriculum: Record<string, string[]>;
  outcomes: string[];
  facilities: string[];
  heroImage?: string | null;
};

type ProgramDetailPageProps = {
  program: ProgramDetailData;
};

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  return (
    <div className="bg-background text-[#111]">
      <ProgramHeroSection
        slug={program.slug}
        title={program.title}
        department={program.department}
        durationMonths={program.durationMonths}
        tuitionCents={program.tuitionCents}
        mode={program.mode}
        shortDescription={program.shortDescription}
        heroImage={program.heroImage}
      />
      <ProgramOutcomesSection outcomes={program.outcomes} />
      <ProgramRecruitersSection />
      <ProgramHighlightsSection highlights={program.highlights} />
      <ProgramFitSection />
      <ProgramAlumniSection />
      <ProgramCurriculumSection curriculum={program.curriculum} />
      <ProgramFacilitiesSection facilities={program.facilities} />
      <ProgramComparisonSection />
      <ProgramCtaSection programTitle={program.title} slug={program.slug} />
    </div>
  );
}
