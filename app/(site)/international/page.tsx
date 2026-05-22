import Image from "next/image";

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
      <section className="-mt-30 w-full pt-30">
        <div className="relative w-full overflow-hidden">
          <div className="relative min-h-120 w-full overflow-hidden md:min-h-150 lg:min-h-210">
            <Image
              src="/assets/img/banner/international.jpeg"
              alt="International banner"
              fill
              priority
              sizes="100vw"
              className="object-contain"
              draggable={false}
            />
            <div className="relative mx-auto flex max-w-7xl justify-end px-4 py-16 md:px-6 md:py-20 lg:py-24">
              <aside className="w-full max-w-md border border-black/10 bg-white p-6 text-black shadow-[0_20px_35px_rgba(0,0,0,0.2)]">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Want to know more?
                </h2>
                <p className="mt-2 text-sm text-black/65">
                  Discover more information about international admissions.
                </p>

                <form className="mt-5 grid gap-3">
                  <label
                    className="text-sm font-semibold"
                    htmlFor="international-name"
                  >
                    Full name
                  </label>
                  <input
                    id="international-name"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your full name"
                  />

                  <label
                    className="text-sm font-semibold"
                    htmlFor="international-email"
                  >
                    Email
                  </label>
                  <input
                    id="international-email"
                    type="email"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your email"
                  />

                  <label
                    className="text-sm font-semibold"
                    htmlFor="international-phone"
                  >
                    Phone number
                  </label>
                  <input
                    id="international-phone"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="(000) 000-0000"
                  />

                  <button
                    type="button"
                    className="mt-2 inline-flex items-center justify-center border border-[#6366F1] bg-[#6366F1] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4F46E5]"
                  >
                    Request Callback
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <InternationalHeroIntroSection />
      <InternationalProgramPathwaysSection />
      {/* <InternationalNewsUpdatesSection /> */}
      <InternationalSupportServicesSection />
      {/* <InternationalCulturalDiversitySection /> */}
      <InternationalFacilitiesSection />
      <InternationalOpportunitiesSection />
      <InternationalAchievementsSection />
      <InternationalIconsSection />
      <InternationalStudentTestimonialsSection />
      <InternationalAdmissionsHelpSection />
    </main>
  );
}
