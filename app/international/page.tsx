import { HeroSection } from "@/components/home/hero";
import { InternationalAchievementsSection } from "@/components/international/international-achievements-section";
import { InternationalAdmissionsHelpSection } from "@/components/international/international-admissions-help-section";
import { InternationalCulturalDiversitySection } from "@/components/international/international-cultural-diversity-section";
import { InternationalFacilitiesSection } from "@/components/international/international-facilities-section";
import { InternationalHeroIntroSection } from "@/components/international/international-hero-intro-section";
import { InternationalIconsSection } from "@/components/international/international-icons-section";
import { InternationalNewsUpdatesSection } from "@/components/international/international-news-updates-section";
import { InternationalOpportunitiesSection } from "@/components/international/international-opportunities-section";
import { InternationalProgramPathwaysSection } from "@/components/international/international-program-pathways-section";
import { InternationalStudentTestimonialsSection } from "@/components/international/international-student-testimonials-section";
import { InternationalSupportServicesSection } from "@/components/international/international-support-services-section";

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111827]">
      <HeroSection imageSrc="/assets/img/campus-life/hero.png" imageAlt="International students at SVIET" />
      <InternationalHeroIntroSection />
      <InternationalProgramPathwaysSection />
      <InternationalNewsUpdatesSection />
      <InternationalSupportServicesSection />
      <InternationalCulturalDiversitySection />
      <InternationalFacilitiesSection />
      <InternationalOpportunitiesSection />
      <InternationalAchievementsSection />
      <InternationalIconsSection />
      <InternationalStudentTestimonialsSection />
      <InternationalAdmissionsHelpSection />
    </main>
  );
}
