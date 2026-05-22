"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STUDENT_SPEAK_SLIDES = [
  {
    imageSrc: "/assets/img/students/aman-student-speak.jpeg",
    imageAlt: "Student Speaks card featuring Aman Verma",
  },
  {
    imageSrc: "/assets/img/students/NIKHIL-student-speak.jpeg",
    imageAlt: "Student Speaks card featuring Nikhil Arora",
  },
  {
    imageSrc: "/assets/img/students/riya-student-speak.jpeg",
    imageAlt: "Student Speaks card featuring Riya Sharma",
  },
  {
    imageSrc: "/assets/img/students/simran-student-speak.jpeg",
    imageAlt: "Student Speaks card featuring Simran Kaur",
  },
] as const;

export function PlacementStudentSpeakSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const updateArrowVisibility = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const scrollLeft = track.scrollLeft;

      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScrollLeft - 1);
    };

    updateArrowVisibility();
    track.addEventListener("scroll", updateArrowVisibility, { passive: true });
    window.addEventListener("resize", updateArrowVisibility);

    return () => {
      track.removeEventListener("scroll", updateArrowVisibility);
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const offset = Math.round(track.clientWidth * 0.82);
    track.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-8 pb-1 md:mt-12">
      <div className="text-center">
        <p className="text-lg font-medium leading-none text-black sm:text-xl md:text-2xl">
          Our students speak
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-none tracking-[-0.02em] text-[#0b3b8f] sm:text-3xl md:text-5xl">
          empowering the future
        </h3>
      </div>

      <div className="relative mt-6 md:mt-8">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:bg-black/80 md:flex"
            aria-label="Previous student story"
          >
            <ChevronLeft size={20} />
          </button>
        ) : null}

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:bg-black/80 md:flex"
            aria-label="Next student story"
          >
            <ChevronRight size={20} />
          </button>
        ) : null}

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 pt-1 scroll-smooth sm:px-[6vw] md:gap-4 md:px-[12vw]"
          aria-label="Student stories carousel"
        >
          {STUDENT_SPEAK_SLIDES.map((slide) => (
            <article
              key={slide.imageSrc}
              className="w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#0b3b8f]/10 sm:w-[62vw] md:w-[42vw] lg:w-[28vw]"
            >
              <div className="relative aspect-858/768 w-full">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  sizes="(max-width: 768px) 62vw, (max-width: 1024px) 42vw, 28vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
