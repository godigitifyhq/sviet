"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PLACEMENT_CARDS = [
  {
    name: "Sajan Kumar Rajbanshi",
    imageSrc: "/assets/img/students/Placement-Mockup-1.png",
    imageAlt: "Sajan Kumar Rajbanshi",
    iconLabel: "</>",
    cardTone: "bg-[#28196f]",
    badgeTone: "bg-[#5562f6]",
  },
  {
    name: "Pranshu Kumar",
    imageSrc: "/assets/img/students/pppp.png",
    imageAlt: "Pranshu Kumar",
    iconLabel: "●",
    cardTone: "bg-[#f4c63f]",
    badgeTone: "bg-[#87d85d]",
  },
  {
    name: "Pratham Pandya",
    imageSrc: "/assets/img/students/1.png",
    imageAlt: "Pratham Pandya",
    iconLabel: "C",
    cardTone: "bg-[#28196f]",
    badgeTone: "bg-white",
  },
  {
    name: "Vedant Mehta",
    imageSrc: "/assets/img/students/image (1).png",
    imageAlt: "Vedant Mehta",
    iconLabel: "|||",
    cardTone: "bg-[#f4c63f]",
    badgeTone: "bg-white",
  },
] as const;

function LaurelMark({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 160"
      aria-hidden="true"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <g fill="#2f266d">
        <ellipse cx="23" cy="14" rx="3.4" ry="9" transform="rotate(-28 23 14)" />
        <ellipse cx="18" cy="26" rx="3.4" ry="9" transform="rotate(-31 18 26)" />
        <ellipse cx="15" cy="39" rx="3.4" ry="9" transform="rotate(-34 15 39)" />
        <ellipse cx="14" cy="54" rx="3.4" ry="9" transform="rotate(-38 14 54)" />
        <ellipse cx="15" cy="69" rx="3.4" ry="9" transform="rotate(-43 15 69)" />
        <ellipse cx="18" cy="84" rx="3.4" ry="9" transform="rotate(-48 18 84)" />
        <ellipse cx="22" cy="99" rx="3.4" ry="9" transform="rotate(-54 22 99)" />
        <ellipse cx="27" cy="114" rx="3.4" ry="9" transform="rotate(-58 27 114)" />
        <ellipse cx="31" cy="128" rx="3.4" ry="9" transform="rotate(-64 31 128)" />
        <ellipse cx="34" cy="142" rx="3.4" ry="9" transform="rotate(-70 34 142)" />
      </g>
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <div className="grid h-14 w-14 grid-cols-2 grid-rows-2 overflow-hidden rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.18)] md:h-16 md:w-16">
      <div className="bg-[#f25022]" />
      <div className="bg-[#7fba00]" />
      <div className="bg-[#00a4ef]" />
      <div className="bg-[#ffb900]" />
    </div>
  );
}

function PlacementCardsMarquee() {
  return (
    <div className="mt-12 overflow-hidden px-2 pb-2 md:mt-16 md:px-6">
      <style>{`
        @keyframes placementCardsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-placement-cards-marquee {
          animation: placementCardsMarquee 28s linear infinite;
        }
      `}</style>

      <div className="flex w-max gap-6 md:gap-8 animate-placement-cards-marquee">
        {[...PLACEMENT_CARDS, ...PLACEMENT_CARDS].map((card, index) => (
          <article key={`${card.name}-${index}`} className="w-74 shrink-0 md:w-88">
            <div className={`relative h-104 overflow-hidden rounded-3xl ${card.cardTone} shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:h-120`}>
              <div className="absolute inset-x-0 top-0 h-[62%] px-4 pt-4 md:px-6 md:pt-6">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 310px, 345px"
                  className="object-contain object-top"
                />
              </div>

              <div className="absolute left-1/2 top-[62%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white text-3xl font-bold text-white shadow-lg md:h-24 md:w-24 md:text-4xl">
                <div className={`flex h-full w-full items-center justify-center rounded-full ${card.badgeTone} ${card.badgeTone === "bg-white" ? "text-[#b93b44]" : "text-white"}`}>
                  <span className="leading-none">{card.iconLabel}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 rounded-[34px] border border-[#2f266d] bg-white px-4 py-4 text-center text-[0.95rem] font-extrabold leading-tight text-black shadow-[0_12px_28px_rgba(47,38,109,0.12)] md:px-5 md:py-5 md:text-[1.05rem]">
                {card.name}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function PlacementStatsBlock() {
  return (
    <div className="mt-14 overflow-hidden rounded-[28px] bg-[#f4c63f] px-6 py-14 text-[#2f266d] shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:mt-18 md:rounded-[34px] md:px-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div className="flex flex-col items-center justify-center text-center md:border-r-2 md:border-[#8f7421]/45 md:pr-12">
          <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-6xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[7.25rem]">
            60 Lacs
          </p>
          <p className="mt-5 text-2xl font-medium text-black md:mt-8 md:text-4xl">
            Highest package offered
          </p>
        </div>

        <div className="grid gap-8 md:gap-0">
          <div className="grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-6 md:pb-10">
            <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-5xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[5.75rem]">
              20,000+
            </p>
            <p className="text-2xl font-medium text-black md:pt-3 md:text-4xl">Placed Students</p>
          </div>

          <div className="h-px w-full bg-[#8f7421]/50 md:mb-10" />

          <div className="grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-6">
            <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-5xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[5.75rem]">
              2,200+
            </p>
            <p className="text-2xl font-medium text-black md:pt-3 md:text-4xl">Recruiters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
];

const PLACEMENT_HIGHLIGHT_CARDS = [
  {
    imageSrc: "/assets/img/college/1st.png",
    imageAlt: "SVIET ranked first in North India",
  },
  {
    imageSrc: "/assets/img/college/4th.png",
    imageAlt: "SVIET ranked fourth among top engineering colleges in Punjab",
  },
  {
    imageSrc: "/assets/img/college/8th.png",
    imageAlt: "SVIET ranked eighth among outstanding engineering colleges in India",
  },
  {
    imageSrc: "/assets/img/college/global_recognition.png",
    imageAlt: "Global recognition for excellence in education",
  },
  {
    imageSrc: "/assets/img/college/elets.png",
    imageAlt: "Elets World Education Summit award",
  },
  {
    imageSrc: "/assets/img/college/dl.png",
    imageAlt: "Digital learning recognition",
  },
  {
    imageSrc: "/assets/img/college/banner_95.png",
    imageAlt: "SVGOI recognition banner",
  },
] as const;

function PlacementStudentSpeakSection() {
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
        <h3 className="mt-3 bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-4xl font-extrabold leading-none tracking-[-0.04em] text-transparent md:text-[4.75rem]">
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
              className="shrink-0 snap-center overflow-hidden rounded-[28px] bg-[#f2f2f2] shadow-[0_20px_55px_rgba(0,0,0,0.14)] w-[84vw] md:w-[72vw] lg:w-[66vw]"
            >
              <div className="relative aspect-video w-full md:aspect-17/9">
                <Image src={slide.imageSrc} alt={slide.imageAlt} fill sizes="(max-width: 768px) 84vw, 66vw" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementHighlightsSection() {
  return (
    <section className="mt-16 rounded-[36px] bg-[#21146d] px-4 py-14 text-white shadow-[0_24px_70px_rgba(17,10,58,0.28)] md:mt-20 md:px-8 md:py-18">
      <div className="text-center">
        <p className="text-2xl font-medium leading-none text-white md:text-[2.15rem]">If they did it, so can you</p>
        <h3 className="mt-4 text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#f4c63f] md:text-[4.9rem]">
          Placement Highlights
        </h3>
      </div>

      <div className="relative mt-10 overflow-hidden md:mt-12">
        <style>{`
          @keyframes placementHighlightsMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-placement-highlights-marquee {
            animation: placementHighlightsMarquee 34s linear infinite;
          }
        `}</style>

        <div className="flex w-max gap-5 animate-placement-highlights-marquee md:gap-6">
          {[...PLACEMENT_HIGHLIGHT_CARDS, ...PLACEMENT_HIGHLIGHT_CARDS].map((card, index) => (
            <article
              key={`${card.imageSrc}-${index}`}
              className="w-62 shrink-0 rounded-[28px] bg-[#2a1a7a] p-3 shadow-[0_18px_44px_rgba(0,0,0,0.22)] md:w-73"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-[22px] bg-[#1d1460]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 248px, 292px"
                  className="object-contain object-center p-1"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlacementSuccessBanner() {
  return (
    <section className="w-full bg-white pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 text-center md:gap-6">
          <LaurelMark className="h-24 w-7 shrink-0 md:h-32 md:w-8" />

          <div className="max-w-3xl">
            <p className="text-3xl font-normal leading-none text-[#0f0f0f] md:text-5xl">Their Success,</p>
            <h2 className="mt-2 bg-linear-to-r from-[#5249e4] via-[#8a4bd2] to-[#d06a98] bg-clip-text text-4xl font-extrabold leading-none text-transparent md:text-6xl">
              Our Greatest Pride
            </h2>
          </div>

          <LaurelMark className="h-24 w-7 shrink-0 md:h-32 md:w-8" flip />
        </div>

        <div className="mx-auto mt-10 max-w-260 md:mt-12">
          <div className="relative overflow-hidden rounded-[40px] bg-[#25166e] px-6 py-8 shadow-[0_20px_60px_rgba(28,18,87,0.22)] md:h-72 md:px-10 md:py-10">
            <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1.2fr_0.95fr] md:gap-6">
              <div className="relative z-10 flex flex-col justify-center md:pr-2">
                <p className="text-base font-medium text-white md:text-xl">Our Top Placements</p>
                <p className="mt-3 max-w-60 text-[2.1rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#ffd54c] md:max-w-65 md:text-[3.3rem]">
                  A PU Star
                  <br />
                  Goes
                  <br />
                  Global
                </p>
              </div>

              <div className="relative flex h-56 items-end justify-center overflow-hidden md:h-64">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#7cf0d7]/15 blur-3xl md:h-28 md:w-52" />
                <Image
                  src="/assets/img/students/Placement-Mockup-1.png"
                  alt="Suraj Jagtap and Tanish Patel placed at Microsoft"
                  width={560}
                  height={560}
                  priority
                  className="relative z-10 h-56 w-auto max-w-none object-contain object-bottom md:h-64"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
                <div>
                  <p className="text-sm font-semibold leading-tight text-white md:text-[1.05rem]">Suraj Jagtap &amp; Tanish Patel</p>
                  <p className="mt-1 text-xs font-medium text-white/80 md:text-sm">Microsoft</p>
                </div>

                <p className="text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl">60 LPA</p>

                <MicrosoftMark />
              </div>
            </div>
          </div>
        </div>

        <PlacementCardsMarquee />

        <PlacementStatsBlock />

        <PlacementStudentSpeakSection />

        <PlacementHighlightsSection />
      </div>
    </section>
  );
}