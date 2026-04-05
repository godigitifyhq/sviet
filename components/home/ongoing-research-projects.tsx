"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Users, DollarSign, FileText } from "lucide-react";

const researchProjects = [
  {
    id: 1,
    title: "An Implementation research study on developing a high quality patient-centric integrated model for emergency care systems in selected districts of India",
    grant: "₹4.7 Crores",
    grantLacs: "470 lacs",
    investigator: "Dr. Shreyas Patel",
    organization: "ICMR",
    icon: "🔧",
    gradient: "from-pink-500 via-purple-600 to-purple-700",
  },
  {
    id: 2,
    title: "Assessment-Water Quality of Ground and River water and identification of Causative Microorganism causing water borne diseases and Epidemiological studies in the state of Gujarat",
    grant: "₹1.5 Crores",
    grantLacs: "150 lacs",
    investigator: "Prof. M.H. Fulekar",
    organization: "ICMR",
    icon: "💧",
    gradient: "from-pink-500 via-blue-600 to-purple-700",
  },
  {
    id: 3,
    title: "Integrating Oral Healthcare into RMNCAH – plus- N under the National Health Mission for pregnant women and new mothers : A multisite implementation research",
    grant: "₹1.31 Crores",
    grantLacs: "131 lacs",
    investigator: "Dr. Hemant Patadia",
    organization: "ICMR",
    icon: "😊",
    gradient: "from-pink-500 via-purple-600 to-purple-700",
  },
  {
    id: 4,
    title: "Advanced Drug Delivery Systems for Chronic Disease Management",
    grant: "₹2.5 Crores",
    grantLacs: "250 lacs",
    investigator: "Dr. Priya Singh",
    organization: "ICMR",
    icon: "💊",
    gradient: "from-pink-500 via-green-600 to-purple-700",
  },
  {
    id: 5,
    title: "Genomic Studies in Rare Genetic Disorders: A Population-based Approach",
    grant: "₹3.2 Crores",
    grantLacs: "320 lacs",
    investigator: "Dr. Rajesh Kumar",
    organization: "ICMR",
    icon: "🧬",
    gradient: "from-pink-500 via-orange-600 to-purple-700",
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
    setDragStart(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0));
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
            <div className="h-1 w-8 bg-[#3B82F6]"></div>
            <h2 className="text-2xl font-bold text-[#111827] md:text-3xl">
              Ongoing research projects
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="space-y-6">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={scrollPosition === 0}
              className="h-10 w-10 rounded-full border border-[#3B82F6] text-[#3B82F6] transition disabled:opacity-40 hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shrink-0"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-[#3B82F6] text-[#3B82F6] transition hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shrink-0"
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
              <div
                key={project.id}
                className="shrink-0 w-80  cursor-pointer"
              >
              <button className="w-full  text-left transition-transform">
                  <div className="bg-white rounded-[15px]! mb-4 overflow-hidden   h-full flex flex-col">
                    {/* Top Section - Gradient Background with Design Elements */}
                    <div
                      className={`bg-linear-to-br ${project.gradient} w-[299px] mx-auto mt-[10px] rounded-[15px]!  p-6 text-white relative overflow-hidden min-h-64`}
                    >
                      {/* Decorative wavy background element */}
                      <svg
                        className="absolute bottom-0 left-0 w-32 h-32 opacity-20"
                        viewBox="0 0 200 200"
                        fill="white"
                      >
                        <path
                          d="M0,100 Q50,50 100,100 T200,100 L200,200 L0,200 Z"
                          fill="white"
                          opacity="0.3"
                        />
                      </svg>

                      {/* ICMR Logo Badge */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-transparent bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text">
                            ICMR
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                          {/* Project Title Badge */}
                          <div className="mb-2">
                            <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-sm">
                              PROJECT TITLE
                            </span>
                          </div>
                          {/* Title */}
                          <p className="text-sm font-semibold mb-4 leading-tight line-clamp-3 pr-12">
                            {project.title}
                          </p>
                        </div>

                        <div>
                          {/* Project Grant Badge */}
                          <div className="mb-2">
                            <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-sm">
                              PROJECT GRANT
                            </span>
                          </div>
                          {/* Grant Amount */}
                          <div className="text-4xl font-bold mb-4">{project.grant}</div>

                          {/* Project Investigator Badge */}
                          <div className="mb-2">
                            <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-sm">
                              PROJECT INVESTIGATOR
                            </span>
                          </div>
                          {/* Investigator Name */}
                          <p className="text-xs font-medium">{project.investigator}</p>
                        </div>
                      </div>

                      {/* Decorative bottom wave */}
                      <svg
                        className="absolute bottom-0 right-0 w-40 h-32 opacity-30"
                        viewBox="0 0 400 200"
                        fill="white"
                      >
                        <path d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z" />
                      </svg>
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

                        {/* Amount */}
                        <div className="flex items-center gap-2 border-t pt-3">
                          <div className="w-6 h-6 rounded-full bg-[#5047d8]/10 flex items-center justify-center shrink-0">
                            <DollarSign size={14} className="text-[#5047d8]" />
                          </div>
                          <span className="text-xs font-semibold text-[#5047d8]">
                            {project.grantLacs}
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
