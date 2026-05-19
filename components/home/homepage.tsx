import { EducationBeyondSection } from "@/components/home/education-beyond";
import { ExperiencesSection } from "@/components/home/experiences";
import { HeroSection } from "@/components/home/hero";
import { DistinguishedLeadersSection } from "@/components/home/leaders";
import { PivotEducationSection } from "@/components/home/pivot-education";
import { CurriculumOpportunitiesSection } from "@/components/home/curriculum-opportunities";
import { ResearchInnovationsSection } from "@/components/home/research-innovations";
import { OngoingResearchProjectsSection } from "@/components/home/ongoing-research-projects";
import { EntrepreneurshipSection } from "@/components/home/entrepreneurship";
import { CorporateCollaborationSection } from "@/components/home/corporate-collaboration-section";
import { PlacementStatsSection } from "@/components/home/placement-stats-section";
import { MOUImpactSection } from "@/components/home/mou-impact-section";
import { ClubsCommunitiesSection } from "@/components/home/clubs-communities-section";
import { YouTubeChannelSection } from "@/components/home/youtube-channel-section";
import { StudentTestimonialsSection } from "@/components/home/testimonials";
import { FloatingApplyNow } from "@/components/home/floating-apply-now";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827]">
      <FloatingApplyNow />
      <HeroSection />
      <EducationBeyondSection />
      <ExperiencesSection />
      <PivotEducationSection />
      <PlacementStatsSection />
      {/* <CorporateCollaborationSection /> */}
      <MOUImpactSection />
      <CurriculumOpportunitiesSection />
      <DistinguishedLeadersSection />
      <ResearchInnovationsSection />
      <OngoingResearchProjectsSection />
      <EntrepreneurshipSection />
      <ClubsCommunitiesSection />
      <YouTubeChannelSection />
      <StudentTestimonialsSection />
      {/* <ScholarshipSection /> */}
    </div>
  );
}
