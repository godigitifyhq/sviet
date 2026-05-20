"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/assets/img/corporate%20connect/corporate_connect.jpg",
    caption: "Pune Chapter kickoff — Würth IT corporate visit",
    location: "Pune, Maharashtra",
  },
  {
    src: "/assets/img/corporate%20connect/corporate_connect1.jpg",
    caption: "24/7 Software meet — building talent pipelines",
    location: "Pune, Maharashtra",
  },
  {
    src: "/assets/img/corporate%20connect/corp2.jpg",
    caption: "SVGOI directors with industry leaders",
    location: "Pan-India Corporate Drive",
  },
  {
    src: "/assets/img/corporate%20connect/cc-3.jpg",
    caption: "Corporate engagement — expanding recruiter network",
    location: "Pan-India Corporate Drive",
  },
  {
    src: "/assets/img/corporate%20connect/cc-4.jpg",
    caption: "Director-level partnership discussions",
    location: "Pan-India Corporate Drive",
  },
  {
    src: "/assets/img/corporate%20connect/cc-5.jpg",
    caption: "Fostering meaningful collaborations with corporates",
    location: "Pan-India Corporate Drive",
  },
];

export function CorporateConnectSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: dir === "left" ? -520 : 520,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0a0a0a] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {/* Pill label */}
            <div className="mb-4 inline-block bg-[#9b1c1c] px-5 py-2">
              <p className="font-serif text-sm italic text-white">
                Bridging Industry &amp; Academia
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
              Corporate
            </h2>
            <div className="flex items-baseline gap-4">
              <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
                Connect
              </h2>
              <div className="flex flex-col border border-white/30 px-2 py-0.5">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/60">
                  Series
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
              SVGOI takes a leap forward with the launch of the{" "}
              <span className="font-bold text-[#f7941d]">
                Corporate Connect Series
              </span>
              . Kicking off with the Pune Chapter — over{" "}
              <span className="font-bold text-[#f7941d]">10+</span> corporate
              meetings in 3 days to foster meaningful collaborations and real
              hiring partnerships.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "2,200+ Partner Companies",
                "Pune Chapter — Active",
                "10+ Meetings / Drive",
                "Pan-India Reach",
              ].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#f7941d]/40 bg-[#f7941d]/10 px-4 py-1.5 text-sm font-semibold text-[#f7941d]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-[#f7941d] hover:text-[#f7941d]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-[#f7941d] hover:text-[#f7941d]"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.src}
              className="group relative w-120 shrink-0 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.caption}
                  fill
                  sizes="480px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                {/* Location badge */}
                <div className="absolute right-3 top-3 bg-[#9b1c1c] px-3 py-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white">
                    {slide.location}
                  </p>
                </div>
                {/* Red top accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#f7941d]" />
              </div>

              {/* Caption */}
              <div className="border border-white/10 bg-black px-4 py-3">
                <p className="text-sm font-medium text-white/80">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <p className="mt-8 text-center text-sm leading-relaxed text-gray-600 md:text-sm">
          Our directors and placement team actively visit leading companies
          across India — every handshake is a career pathway for our students.
        </p>
      </div>
    </section>
  );
}
