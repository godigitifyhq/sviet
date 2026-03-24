"use client";

import { useState, useRef } from "react";

const RANKING_SLIDES = [
  {
    id: 1,
    achievement: {
      title: "#1 In North India For Industry–Academia Curriculum",
      description:
        "We're Proud To Be Recognized As The Leading Institution In North India For Integrating Industry With Academics. This Recognition Reflects Our Focus On Real-World Learning, Career Readiness, And Innovation-Driven Education.",
      logos: ["WEBCON", "SVIET"],
      badge: "1ST",
      badgeSubtitle: "BEST INSTITUTION IN NORTH INDIA",
      badgeCaption: "FOR EXECUTION OF INDUSTRY & ACADEMIA CURRICULUM at WEBCON 2025",
    },
    banner: {
      label: "Fostering Futures",
      heading: "SETTING NEW BENCHMARKS",
      ranking: "#RANKED1",
      subtext: "For Offering Highest Placement Ratio",
      stats: [
        { value: "50 LPA", label: "Highest CTC" },
        { value: "6.5 LPA", label: "Average CTC" },
        { value: "3000+", label: "Placements" },
      ],
    },
  },
  {
    id: 2,
    achievement: {
      title: "#1 For Highest Placement Ratio",
      description:
        "SVIET consistently achieves the highest placement ratio among institutions in North India, with students securing positions across top Fortune 500 companies and innovative startups.",
      logos: ["SVIET", "PLACEMENT"],
      badge: "100%",
      badgeSubtitle: "PLACEMENT RATE",
      badgeCaption: "HIGHEST IN REGION - 2024",
    },
    banner: {
      label: "Career Excellence",
      heading: "INDUSTRY PARTNERSHIPS",
      ranking: "#CONNECTED WITH 500+",
      subtext: "Leading Companies & Organizations",
      stats: [
        { value: "500+", label: "Partner Companies" },
        { value: "98%", label: "Success Rate" },
        { value: "Global", label: "Reach" },
      ],
    },
  },
  {
    id: 3,
    achievement: {
      title: "#1 For Innovation & Entrepreneurship",
      description:
        "SVIET fosters an entrepreneurial ecosystem where students transform ideas into ventures with mentorship, funding, and infrastructure support from industry leaders.",
      logos: ["STARTUP", "INNOVATION"],
      badge: "200+",
      badgeSubtitle: "STARTUPS FOUNDED",
      badgeCaption: "BY SVIET ALUMNI & STUDENTS",
    },
    banner: {
      label: "Innovation Hub",
      heading: "STARTUP ECOSYSTEM",
      ranking: "#RANKED TOP 10",
      subtext: "For College Startup Incubation",
      stats: [
        { value: "200+", label: "Startups" },
        { value: "₹50Cr+", label: "Funding" },
        { value: "250+", label: "Jobs Created" },
      ],
    },
  },
];

export function RankingBannerSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startXRef.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleDragEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startXRef.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    handleDragEnd();
  };

  const handleDragEnd = () => {
    const threshold = 50;

    if (dragOffset > threshold && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else if (dragOffset < -threshold && activeSlide < RANKING_SLIDES.length - 1) {
      setActiveSlide(activeSlide + 1);
    }

    setDragOffset(0);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Carousel Wrapper */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Container */}
          <div
            ref={slidesContainerRef}
            className="flex transition-all"
            style={{
              transform: `translateX(calc(-${activeSlide * 100}% + ${dragOffset}px))`,
              transitionDuration: isDragging ? "0ms" : "500ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {RANKING_SLIDES.map((slide) => (
              <div key={slide.id} className="min-w-full transition-all duration-500 ease-in-out flex flex-col gap-6">
                {/* Top Achievement Card */}
                <div className="flex flex-col gap-6 rounded-2xl bg-gray-100 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  {/* Left Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">{slide.achievement.title}</h3>
                    <p className="mt-2 max-w-xl text-sm text-gray-600 md:text-base">{slide.achievement.description}</p>
                    <div className="mt-4 flex items-center gap-6">
                      {slide.achievement.logos.map((logo, idx) => (
                        <div
                          key={idx}
                          className="h-10 rounded-lg bg-white px-3 flex items-center justify-center text-xs font-semibold text-gray-700"
                        >
                          {logo}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Big Badge */}
                  <div className="flex flex-col items-center text-center">
                    <div className="text-6xl font-extrabold text-black md:text-7xl">{slide.achievement.badge}</div>
                    <div className="mt-2 text-sm font-semibold text-foreground">{slide.achievement.badgeSubtitle}</div>
                    <div className="mt-1 text-xs text-gray-600">{slide.achievement.badgeCaption}</div>
                  </div>
                </div>

                {/* Main Gradient Banner */}
                <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-linear-to-r from-[#7f1d1d] via-[#dc2626] to-[#1e1b4b] md:min-h-[320px]">
                  <div className="flex h-full items-center justify-between px-8 md:px-12">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="text-sm text-white/80">{slide.banner.label}</div>
                      <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">{slide.banner.heading}</h2>
                      <div className="mt-4 text-4xl font-extrabold tracking-wide text-white md:text-6xl">{slide.banner.ranking}</div>
                      <div className="mt-2 text-white/80">{slide.banner.subtext}</div>
                    </div>

                    {/* Right Stats */}
                    <div className="flex flex-col items-end gap-4 text-white">
                      {slide.banner.stats.map((stat, idx) => (
                        <div key={idx} className="text-right">
                          <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
                          <div className="text-xs text-white/70 md:text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {RANKING_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
