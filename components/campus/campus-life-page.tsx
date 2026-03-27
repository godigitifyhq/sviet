import { CampusLifeHeroSection } from "@/components/campus/campus-life-hero";
import { CampusLifeHomeAwaySection } from "@/components/campus/campus-life-home-away";
import { CampusLifeTestimonialsSection } from "@/components/campus/campus-life-testimonials";
import { CampusLifeApplyNowStrip } from "@/components/campus/campus-life-apply-now";
import { CampusLifeStudentSpeakSection } from "@/components/campus/campus-life-student-speak";
import { CampusLifeGallerySection } from "@/components/campus/campus-life-gallery";
import { CampusLifeEventsSection } from "@/components/campus/campus-life-events";

export function CampusLifeExactPage() {
  return (
    <div className="bg-[#f5f5f5] text-[#111]">
      <CampusLifeHeroSection />
      <CampusLifeHomeAwaySection />
      <CampusLifeTestimonialsSection />
      <CampusLifeApplyNowStrip />
      <CampusLifeStudentSpeakSection />
      <CampusLifeGallerySection />
      <CampusLifeEventsSection />
    </div>
  );
}
