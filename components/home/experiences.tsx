"use client";

import Image from "next/image";
import { useState } from "react";

const milestonePlacements = [
  {
    company: "Goldman Sachs",
    studentName: "Suhani Shah",
    position: "Software Engineering Analyst",
    studentImage: "/assets/img/students/pppp.png",
    companyLogo: "/assets/img/companies/goldman_sachs.png",
  },
  {
    company: "Microsoft",
    studentName: "Tanish Patel",
    position: "Software Engineer",
    studentImage: "/assets/img/students/Placement-Mockup-1.png",
    companyLogo: "/assets/img/companies/jio_digital.png",
  },
  {
    company: "Amazon",
    studentName: "Suraj Jagtap",
    position: "Backend Engineer",
    studentImage: "/assets/img/students/pppp.png",
    companyLogo: "/assets/img/companies/amazon.png",
  },
];

export function ExperiencesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % milestonePlacements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + milestonePlacements.length) % milestonePlacements.length);
  };

  const placement = milestonePlacements[currentSlide];

  return (
    <section className="bg-[#FFFFFF] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-[#000000] md:text-5xl">
            One University, infinite placements.
          </h1>
          <h2 className="text-2xl font-light leading-tight text-[#111827] md:text-3xl">
            Come with your passion, leave with your profession!
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Discover a transformative ecosystem that blends academic excellence with real-world exposure, empowering
            students to step confidently into their chosen careers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Left Stat Card */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#6B7280]">
              <span className="text-lg">▶</span>
              <span className="text-sm md:text-base">Ready to provide you with the best job offers with up to</span>
            </div>
            <div className="text-5xl font-bold text-[#f7941d] md:text-6xl">60 Lakhs</div>
            <p className="text-sm text-[#6B7280] md:text-base">
              Highest package & average packages of <span className="text-[#f7941d]">4-6 LPA</span>.
            </p>
          </div>

          {/* Right Stat Card */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#6B7280]">
              <span className="text-lg">▶</span>
              <span className="text-sm md:text-base">We have</span>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#f7941d] md:text-6xl">2,200+</div>
              <div className="text-3xl font-bold text-[#111827] md:text-4xl">Recruiters</div>
            </div>
          </div>
        </div>


        {/* Milestone Placements Carousel */}
        <div className="mt-16 space-y-8">
          {/* Carousel Card */}
          <div className="h-80 overflow-hidden rounded-2xl bg-[#F5F7FB] p-4 md:p-8">
            <div className="grid h-full gap-8 md:grid-cols-[1fr_1fr]">
              {/* Left Content */}
              <div className="space-y-3 flex flex-col justify-center md:pr-4">
                <div>
                  <h2 className="text-xs font-semibold text-[#f7941d] md:text-sm">Milestone Placements</h2>
                  <p className="mt-1 text-base font-light leading-relaxed text-[#111827] md:text-lg">
                    Aligning your career aspirations with
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold leading-tight text-[#111827] md:text-2xl">
                    Prominent Companies For the most enriching future career
                  </h3>
                </div>
              </div>

              {/* Right Side - Student Profile */}
              <div className="relative flex items-end justify-between">
                {/* Decorative star */}
               

                {/* Student Image - Left Side of Right Column */}
                <div className="relative shrink-0">
                  {/* Gradient circles background */}
                  <div className="relative h-56 w-70">

                    {/* Student Image */}
                    <div className="relative z-10 top-4 md:top-8 h-full w-full overflow-hidden">
                      <Image
                        src={placement.studentImage}
                        alt={placement.studentName}
                        width={560}
                        height={424}
                        className="h-full w-w-full object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Profile Info - Right Side */}
                <div className="flex flex-col items-end justify-end space-y-2 pl-4">
                  <div className="relative h-10 w-28 md:h-12 md:w-36">
                    <Image
                      src={placement.companyLogo}
                      alt={placement.company}
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#111827] md:text-base">{placement.studentName}</p>
                    <div className="space-y-0.5 text-xs leading-tight text-[#6B7280]">
                      <p className="font-medium">{placement.company}</p>
                      <p className="font-light line-clamp-2">{placement.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous placement"
              className="inline-flex h-10 w-10 items-center justify-center rounded bg-[#E5E7EB] transition hover:bg-[#D1D5DB]"
            >
              <span className="text-lg text-[#111827]">‹</span>
            </button>

            <div className="flex gap-2">
              {milestonePlacements.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to placement ${index + 1}`}
                  className={`h-2 transition-all ${
                    index === currentSlide ? "w-8 bg-[#f7941d]" : "w-2 bg-[#D1D5DB]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next placement"
              className="inline-flex h-10 w-10 items-center justify-center rounded bg-[#E5E7EB] transition hover:bg-[#D1D5DB]"
            >
              <span className="text-lg text-[#111827]">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
