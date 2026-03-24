import { EducationBeyondSection } from "@/components/home/education-beyond";
import { ExperiencesSection } from "@/components/home/experiences";
import { HeroSection } from "@/components/home/hero";
import { DistinguishedLeadersSection } from "@/components/home/leaders";
import { PivotEducationSection } from "@/components/home/pivot-education";
import { PlacementsSection } from "@/components/home/placements";
import { RankingBannerSection } from "@/components/home/ranking-banner";
import { ScholarshipSection } from "@/components/home/scholarship";
import { StudentTestimonialsSection } from "@/components/home/testimonials";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <HeroSection />
      <EducationBeyondSection />
      <ExperiencesSection />
      <RankingBannerSection />
      <PlacementsSection />
      <PivotEducationSection />
      <DistinguishedLeadersSection />
      <StudentTestimonialsSection />
      <ScholarshipSection />
    </div>
  );
}
