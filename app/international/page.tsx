import Image from "next/image";
import Link from "next/link";

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
      <section className="-mt-30 w-full bg-black pt-30 text-white">
        <div className="relative w-full overflow-hidden">
          <div className="relative min-h-120 w-full overflow-hidden md:min-h-150 lg:min-h-180">
            <Image
              src="/assets/img/banner_hero.jpg"
              alt="SVIET Banner"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/68 to-black/52" aria-hidden="true" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-34 md:px-6 md:pb-20 md:pt-38 lg:grid-cols-[1.1fr_360px] lg:items-center lg:pb-24 lg:pt-42">
              <div>
                <p className="text-sm text-white/80">
                  International / Admissions / <span className="font-semibold text-white">International students</span>
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">International Students</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
                  Start your journey at SVIET with dedicated support for applications, documentation, visas, and campus life.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center border border-[#f7941d] bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
                  >
                    Apply Now
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              <aside className="border border-black/10 bg-white p-6 text-black shadow-[0_20px_35px_rgba(0,0,0,0.2)]">
                <h2 className="text-2xl font-bold md:text-3xl">Want to know more?</h2>
                <p className="mt-2 text-sm text-black/65">Discover more information about international admissions.</p>

                <form className="mt-5 grid gap-3">
                  <label className="text-sm font-semibold" htmlFor="international-name">Full name</label>
                  <input
                    id="international-name"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your full name"
                  />

                  <label className="text-sm font-semibold" htmlFor="international-email">Email</label>
                  <input
                    id="international-email"
                    type="email"
                    className="border border-black/15 bg-white px-3 py-2.5 text-sm outline-none"
                    placeholder="Enter your email"
                  />

                  <label className="text-sm font-semibold" htmlFor="international-phone">Phone number</label>
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
