"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, Play } from "lucide-react";

const curriculumEvents = [
  {
    id: 1,
    name: "Sportsmania 2025",
    mainCard: {
      title: "Sportsmania 2025",
      description: "The annual sports festival of SVIET brings together students in a vibrant display of athleticism, teamwork and competitive spirit across events like football, basketball, and more.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi",
        label: "October 17–18, 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi",
        label: "SVIET Campus",
      },
    ],
  },
  {
    id: 2,
    name: "Elevate 2.0",
    mainCard: {
      title: "Elevate 2.0",
      description: "A flagship cultural & innovation fest bringing together creative minds, performances, workshops and peer-networking celebrating innovation, student talent and campus life.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8",
        label: "September 11–13, 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8",
        label: "SVIET Campus",
      },
    ],
  },
  {
    id: 3,
    name: "TEDx SVIET",
    mainCard: {
      title: "TEDx SVIET",
      description: "TEDx SVIET 2025, under the theme 'The Power of One', featured thoughtful talks and inspiring conversations aimed at spreading ideas worth sharing.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU",
        label: "August 23, 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU",
        label: "SVIET Campus",
      },
    ],
  },
  {
    id: 4,
    name: "DevFest Chandigarh 2025",
    mainCard: {
      title: "DevFest Chandigarh 2025",
      description: "A power-packed tech fest bringing together technologists, developers and enthusiasts for learning, innovation, workshops and community networking focused on AI, Web, Cloud and emerging tech.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZdCLf8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa0",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZdCLf8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa0",
        label: "November 8, 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZdCLf8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa0",
        label: "SVIET Campus",
      },
    ],
  },
  {
    id: 5,
    name: "Graduation Ceremony 2025",
    mainCard: {
      title: "Graduation Ceremony 2025",
      description: "The Graduation Ceremony 2025 marked a proud milestone for graduating batches, celebrating years of dedication, learning, and achievement with esteemed dignitaries.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z",
        label: "May 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z",
        label: "Chief Guest: Dr. Gurpreet Kaur Mann",
      },
    ],
  },
  {
    id: 6,
    name: "Spontania 2025",
    mainCard: {
      title: "Spontania 2025",
      description: "The flagship cultural extravaganza of SVIET with a vibrant three-day celebration of art, culture, and talent featuring dance, music, theater and cultural showcases.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z",
        label: "April 15-17, 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z",
        label: "600+ Students",
      },
    ],
  },
  {
    id: 7,
    name: "Global Futures Summit 2.0",
    mainCard: {
      title: "Global Futures Summit 2.0",
      description: "Industry & HR Perspectives event bringing together thought leaders to discuss emerging trends, career pathways, and shaping the future workforce.",
      image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpKvXrQ6ntRyaQormsAvUSgqZTJcibOuXfBWd",
      cta: "Learn more",
    },
    stats: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGmR8Ob9IoeyaO1d7xYQMuBsK0zrR9WmSiLvE",
        label: "8th March 2025",
      },
    ],
    videos: [
      {
        image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpKvXrQ6ntRyaQormsAvUSgqZTJcibOuXfBWd",
        label: "SVIET Auditorium",
      },
    ],
  },
];

const curriculumImageMap: Record<string, string> = {
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZdCLf8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa0": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZdCLf8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa0",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z",
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpKvXrQ6ntRyaQormsAvUSgqZTJcibOuXfBWd": "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpKvXrQ6ntRyaQormsAvUSgqZTJcibOuXfBWd",
};

const resolveCurriculumImage = (imagePath: string) => curriculumImageMap[imagePath as keyof typeof curriculumImageMap] ?? imagePath;

export function CurriculumOpportunitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 7;
  const totalItems = curriculumEvents.length;

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    
    if (newIndex < scrollOffset) {
      setScrollOffset(newIndex);
    }
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    const newIndex = Math.min(totalItems - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    
    if (newIndex >= scrollOffset + itemsPerView) {
      setScrollOffset(newIndex - itemsPerView + 1);
    }
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleItemClick = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);

    if (index < scrollOffset) {
      setScrollOffset(index);
    } else if (index >= scrollOffset + itemsPerView) {
      setScrollOffset(index - itemsPerView + 1);
    }

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const currentEvent = curriculumEvents[activeIndex];
  const visibleItems = curriculumEvents.slice(scrollOffset, scrollOffset + itemsPerView);

  return (
    <section className="bg-[#FFFFFF] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-light text-[#111827] md:text-5xl">
            National-Level Exposure & Industry Platforms
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
           SVIET builds its own ecosystem of innovation and creativity through large-scale, student-driven events that encourage participation, collaboration, and real-world problem-solving.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="h-8 w-8 rounded-full border border-[#f7941d] text-[#f7941d] transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f7941d] hover:text-white flex items-center justify-center"
                aria-label="Scroll up"
              >
                <ChevronUp size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === totalItems - 1}
                className="h-8 w-8 rounded-full border border-[#f7941d] text-[#f7941d] transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f7941d] hover:text-white flex items-center justify-center"
                aria-label="Scroll down"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            <div ref={containerRef} className="space-y-2 h-96 overflow-hidden">
              {visibleItems.map((event) => {
                const isActive = event.id === curriculumEvents[activeIndex].id;

                return (
                  <button
                    key={event.id}
                    onClick={() => handleItemClick(curriculumEvents.indexOf(event))}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                      isActive
                        ? "text-[#f7941d] font-semibold bg-[#E5E7EB]"
                        : "text-[#6B7280] font-normal hover:text-[#f7941d] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <div className="text-xs md:text-sm line-clamp-2">{event.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-75" : "opacity-100"}`}>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr_1fr]">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[20px] bg-[#f7941d] p-5 md:p-6 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3 h-10 w-10 rounded-lg bg-white/20" />
                    <h3 className="mb-3 text-sm md:text-base font-bold leading-tight">
                      {currentEvent.mainCard.title}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-white/90">
                      {currentEvent.mainCard.description}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-[#f7941d] transition hover:bg-white/90">
                    Learn more
                    <span aria-hidden="true">›</span>
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[20px] bg-black h-80 md:h-full">
                <Image
                  src={resolveCurriculumImage(currentEvent.mainCard.image)}
                  alt={currentEvent.mainCard.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="space-y-4">
                {currentEvent.stats.map((stat, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-[20px] bg-[#000000ba]  text-white h-40">
                    <div className="relative h-full w-full">
                      <Image
                        src={resolveCurriculumImage(stat.image)}
                        alt={stat.label}
                        fill
                        className="object-cover opacity-30 absolute"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-right">
                      <div className="text-2xl md:text-3xl font-bold">{stat.label.split("+")[0]}+</div>
                      <div className="text-xs font-medium opacity-90">{stat.label.split("+")[1]?.trim() || "Participants"}</div>
                    </div>
                  </div>
                ))}

                {currentEvent.videos.map((video, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-[20px] bg-black h-40 group">
                    <Image
                      src={resolveCurriculumImage(video.image)}
                      alt={video.label}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-white">{video.label}</div>
                      </div>
                      <button
                        aria-label="Play video"
                        className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#7c4dff] transition hover:bg-[#6a3cde]"
                      >
                        <Play size={16} className="text-white md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
