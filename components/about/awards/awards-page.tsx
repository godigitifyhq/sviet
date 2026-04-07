import { AwardsGridSection } from "@/components/about/awards/awards-grid-section";
import { AwardsHeroSection } from "@/components/about/awards/awards-hero-section";
import { AwardsIntroSection } from "@/components/about/awards/awards-intro-section";
import { AwardsRelatedLinksSection } from "@/components/about/awards/awards-related-links-section";

export function AwardsPage() {
  return (
    <main className="bg-white text-[#111827]">
      <AwardsHeroSection />
      <AwardsRelatedLinksSection />
      <AwardsIntroSection />
      <AwardsGridSection />
    </main>
  );
}
