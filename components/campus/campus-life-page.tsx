import { CampusLifeHeroSection } from "@/components/campus/campus-life-hero";
import { CampusLifeQuickLinksSection } from "@/components/campus/campus-life-quick-links-section";
import { CampusLifeMemoriesSection } from "@/components/campus/campus-life-memories-section";
import { CampusLifeConcertsSection } from "@/components/campus/campus-life-concerts-section";
import { CampusLifeFreshersSection } from "@/components/campus/campus-life-freshers-section";
import { CampusLifeHangoutsSportsClubsSection } from "@/components/campus/campus-life-hangouts-sports-clubs-section";
import { CampusLifeFestsConvocationSection } from "@/components/campus/campus-life-fests-convocation-section";
import { CampusLifeUpcomingEventsSection } from "@/components/campus/campus-life-upcoming-events-section";

export function CampusLifeExactPage() {
  return (
    <div className=" text-[#111] ">
      <CampusLifeHeroSection />
      <div className="">
        <CampusLifeQuickLinksSection />
      </div>
      <div className=" scroll-mt-36 md:scroll-mt-44" id="campus-student-welfare">
        <CampusLifeMemoriesSection />
      </div>
      <div className="mx-auto max-w-7xl scroll-mt-36 md:scroll-mt-44" id="campus-events">
        <CampusLifeUpcomingEventsSection />
      </div>
      <div className="mx-auto max-w-7xl scroll-mt-36 md:scroll-mt-44" id="campus-bollywood">
        <CampusLifeConcertsSection />
      </div>
      <div className="mx-auto max-w-7xl">
        <CampusLifeFreshersSection />
      </div>
      <div className="mx-auto max-w-7xl">
        <CampusLifeHangoutsSportsClubsSection />
      </div>
      <div className="mx-auto max-w-7xl">
        <CampusLifeFestsConvocationSection />
      </div>
    </div>
  );
}
