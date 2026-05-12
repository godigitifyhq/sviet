"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, FileText } from "lucide-react";

import { researchData } from "../research/research-data";

const totalGrantForOngoingProjects = `More than ${researchData.stats.ongoingFunding} research grant and funding by non-government agencies every year`;

const researchProjects = [
  {
    id: 1,
    title:
      "Optimization of Enteric-Coated Pantoprazole Capsules for Improved Acid Stability and Controlled Release",
    investigator: "Dr. Damit, Associate Professor",
    organization: "Research Project",
    img: "/assets/img/college/Dr_Damit.jpg",
  },
  {
    id: 2,
    title:
      "Development and Evaluation of Mucoadhesive Nano-Liposomal Levocetirizine Syrup for Enhanced Oral Bioavailability",
    investigator: "Dr. Meenakshi Rana, Associate Professor",
    organization: "Research Project",
    img: "/assets/img/college/Dr_Meenakshi.jpg",
  },
  {
    id: 3,
    title:
      "Develop and Evaluate a Co-loaded Topical Gel of Azelaic Acid and Sea Buckthorn Oil for Effective and Safe management of Acne Vulgaris",
    investigator: "Dr. Swikriti, Professor",
    organization: "Research Project",
    img: "/assets/img/college/Dr_Swikriti.jpg",
  },
  {
    id: 4,
    title:
      "Market analysis of Bacillus Clausii spore suspension and Vit D3 oral solution 6000 IU/5 ml",
    investigator: "Ms. Eshna Bhatt, Assistant Professor",
    organization: "Research Project",
    img: "/assets/img/college/Ms_Eshna.jpg",
  },
  {
    id: 5,
    title:
      "Formulation and evaluation of paracetamol dispersible tablets for Pediatric use.",
    investigator: "Dr. Ashok Kumar Tiwary, Professor",
    organization: "Research Project",
    img: "/assets/img/college/Dr_Ashok.jpg",
  },
];

export function OngoingResearchProjectsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    setIsTransitioning(true);
    const scrollAmount = 350; // Width of card + gap
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
    setScrollPosition((e.target as HTMLDivElement).scrollLeft);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.clientX - (containerRef.current?.offsetLeft || 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.clientX - (containerRef.current?.offsetLeft || 0);
    const diff = dragStart - x;
    containerRef.current.scrollLeft = scrollPosition + diff;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(
      e.touches[0].clientX - (containerRef.current?.offsetLeft || 0),
    );
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.touches[0].clientX - (containerRef.current?.offsetLeft || 0);
    const diff = dragStart - x;
    containerRef.current.scrollLeft = scrollPosition + diff;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-[#f7941d]"></div>
            <h2 className="text-2xl font-bold text-[#121217] md:text-3xl">
              Ongoing Research Projects
            </h2>
          </div>
          <p className="mt-3 text-sm font-semibold md:text-base">
            Total Grant : {totalGrantForOngoingProjects}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="space-y-6">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={scrollPosition === 0}
              className="h-10 w-10 rounded-full border border-[#f7941d] text-[#f7941d] transition disabled:opacity-40 hover:bg-[#f7941d] hover:text-white flex items-center justify-center shrink-0"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-[#f7941d] text-[#f7941d] transition hover:bg-[#f7941d] hover:text-white flex items-center justify-center shrink-0"
              aria-label="Next projects"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carousel - Full Width No Scrollbar */}
          <div
            ref={containerRef}
            id="carousel-container"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex gap-6 overflow-x-auto scroll-smooth transition-opacity duration-300 scrollbar-hide select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } ${isTransitioning ? "opacity-75" : "opacity-100"}`}
          >
            <div className="shrink-0 w-4 md:w-6" />
            {researchProjects.map((project) => (
              <div key={project.id} className="shrink-0 w-80  cursor-pointer">
                <button className="w-full  text-left transition-transform">
                  <div className="bg-white rounded-[15px]! mb-4 overflow-hidden   h-full flex flex-col">
                    {/* Top Section - Gradient Background with Design Elements */}
                    <div className="w-full h-48 rounded-t-[15px] text-white relative overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="320px"
                        className="object-cover"
                      />
                    </div>

                    {/* Bottom Section - White Background */}
                    <div className="p-6 grow flex flex-col">
                      {/* Description - Project Title repeated */}
                      <div className="flex items-start gap-3 mb-4">
                        <FileText
                          size={18}
                          className="text-[#5047d8] shrink-0 mt-0.5"
                        />
                        <p className="text-xs font-medium text-[#121217] line-clamp-2">
                          {project.title}
                        </p>
                      </div>

                      {/* Details Section */}
                      <div className="space-y-3 grow">
                        {/* Investigator */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#5047d8]/10 flex items-center justify-center shrink-0">
                            <Users size={14} className="text-[#5047d8]" />
                          </div>
                          <span className="text-xs text-[#4d4d55]">
                            {project.investigator}
                          </span>
                        </div>

                        {/* Organization */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#5047d8]/10 flex items-center justify-center shrink-0">
                            <FileText size={14} className="text-[#5047d8]" />
                          </div>
                          <span className="text-xs text-[#4d4d55]">
                            {project.organization}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
            <div className="shrink-0 w-4 md:w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
