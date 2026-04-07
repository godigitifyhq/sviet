"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STUDENT_SPEAK_SLIDES = [
  {
    imageSrc: "/assets/img/campus-life/image1.png",
    imageAlt: "Students on campus",
  },
  {
    imageSrc: "/assets/img/campus-life/image2.png",
    imageAlt: "Student life at SVIET",
  },
  {
    imageSrc: "/assets/img/campus-life/image4.png",
    imageAlt: "Campus moments with students",
  },
  {
    imageSrc: "/assets/img/campus-life/r1c1.png",
    imageAlt: "Student group on campus",
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
    track.scrollBy({ left: direction === "right" ? offset : -offset, behavior: "smooth" });
  };

  return (
    <section className="mt-16 pb-2 md:mt-20">
      <div className="text-center">
        <p className="text-2xl font-medium leading-none text-black md:text-[2.15rem]">Our students speak</p>
        <h3 className="mt-3 text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#0b3b8f] md:text-[4.75rem]">
          empowering the future
        </h3>
      </div>

      <div className="relative mt-8 md:mt-10">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="absolute left-2 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition hover:bg-black/80 md:flex"
            aria-label="Previous student story"
          >
            <ChevronLeft size={28} />
          </button>
        ) : null}

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="absolute right-2 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition hover:bg-black/80 md:flex"
            aria-label="Next student story"
          >
            <ChevronRight size={28} />
          </button>
        ) : null}

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[5vw] pb-4 pt-2 scroll-smooth md:gap-6 md:px-[9vw]"
          aria-label="Student stories carousel"
        >
          {STUDENT_SPEAK_SLIDES.map((slide) => (
            <article
              key={slide.imageSrc}
              className="w-[84vw] shrink-0 snap-center overflow-hidden rounded-[28px] border border-[#0b3b8f]/10 bg-[#fff8ea] shadow-[0_20px_55px_rgba(0,0,0,0.14)] md:w-[72vw] lg:w-[66vw]"
            >
              <div className="relative aspect-video w-full md:aspect-17/9">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  sizes="(max-width: 768px) 84vw, 66vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
