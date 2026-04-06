"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Serena Chokshi",
    title: '"Hear Why Serena Chokshi Loves Studying at Parul University"',
    image: "/assets/img/college/1st.png",
  },
  {
    id: 2,
    name: "Amarpreet Kaur",
    title: '"Amarpreet Kaur Panesar\'s Student Life at Parul University | A Success Story"',
    image: "/assets/img/college/1st.png",
  },
  {
    id: 3,
    name: "Juhi Lakhani",
    title: '"Juhi\'s Journey @ Parul University: BDes (Fashion & Technology) Student"',
    image: "/assets/img/college/1st.png",
  },
  {
    id: 4,
    name: "Kunal",
    title: '"Hear All About My Journey at Parul University"',
    image: "/assets/img/college/1st.png",
  },
  {
    id: 5,
    name: "Rahul Sharma",
    title: '"SVIET Changed My Career Path - Success Story"',
    image: "/assets/img/college/1st.png",
  },
];

export function StudentTestimonialsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 384; // w-96 = 384px
  const GAP = 24; // gap-6 = 24px
  const CARD_WITH_GAP = CARD_WIDTH + GAP;

  const handleDotClick = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    setIsTransitioning(true);
    const newPosition = index * CARD_WITH_GAP + 16; // 16px for initial padding
    setActiveIndex(index);
    setScrollPosition(newPosition);

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    setIsTransitioning(true);
    const scrollAmount = CARD_WITH_GAP;
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setScrollPosition(newPosition);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const position = (e.target as HTMLDivElement).scrollLeft;
    setScrollPosition(position);
    
    // Update active index based on scroll position
    const newIndex = Math.round((position - 16) / CARD_WITH_GAP);
    setActiveIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return; // Don't drag if clicking button
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    
    const x = e.clientX;
    const diff = dragStart - x;
    containerRef.current.scrollLeft = scrollPosition + diff;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return; // Don't drag if clicking button
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.touches[0].clientX;
    const diff = dragStart - x;
    containerRef.current.scrollLeft = scrollPosition + diff;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#f7941d]">Our students speak</span>
            <span className="text-[#111827]"> hear it from those who are learning with us!</span>
          </h2>
        </div>

        {/* Navigation and Carousel */}
        <div className="space-y-6">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={scrollPosition === 0}
              className="h-10 w-10 rounded-full border border-[#f7941d] text-[#f7941d] transition disabled:opacity-40 hover:bg-[#f7941d] hover:text-white flex items-center justify-center shrink-0"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-[#f7941d] text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white flex items-center justify-center shrink-0"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex gap-6 overflow-x-auto scrollbar-hide select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab scroll-smooth"
            } ${isTransitioning ? "opacity-75" : "opacity-100"}`}
          >
            <div className="shrink-0 w-4 md:w-6" />
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="shrink-0 w-96">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#F5F7FB] to-[#FFFFFF] h-96 flex flex-col justify-between p-6 text-[#111827] transition-transform hover:scale-105 cursor-pointer border border-[#E5E7EB]">
                  {/* Top Section - Quote and Title */}
                  <div>
                    {/* Quote Mark */}
                    <div className="mb-3 text-4xl text-[#F4B740] font-bold">"</div>
                    {/* Quote Title */}
                    <p className="text-sm font-semibold leading-tight">{testimonial.title}</p>
                    {/* Name */}
                    <p className="mt-3 text-xs text-[#6B7280]">{testimonial.name}</p>
                  </div>

                  {/* Bottom Section - Image and Watch Video Button */}
                  <div className="flex items-end justify-between">
                    {/* Student Image */}
                    <div className="relative w-24 h-32 -mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Watch Video Button */}
                    <button className="flex items-center gap-2 rounded-full bg-[#f7941d] px-4 py-2 text-white hover:bg-[#2563EB] transition">
                      <span className="text-xs font-semibold">Watch Video</span>
                      <Play size={16} className="fill-[#F4B740] text-[#F4B740]" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 text-[#D1D5DB] text-2xl opacity-40">,</div>
                  <div className="absolute top-12 right-12 text-[#D1D5DB] text-xl opacity-30">,</div>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-4 md:w-6" />
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition ${
                  activeIndex === index ? "bg-[#f7941d] w-6" : "bg-[#D1D5DB]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
