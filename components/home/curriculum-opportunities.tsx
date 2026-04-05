"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, Play } from "lucide-react";

const curriculumEvents = [
  {
    id: 1,
    name: "Vadodara Fashion Week",
    mainCard: {
      title: "Vadodara Fashion Week",
      description: "The Vadodara Fashion Week (VFW), is a flagship event of the...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "1400+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "30+ Guest speakers",
      },
    ],
  },
  {
    id: 2,
    name: "Samvidhan Pe Charcha",
    mainCard: {
      title: "Samvidhan Pe Charcha",
      description: "A platform for students to discuss and debate constitutional matters...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/1st.png",
        label: "500+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "25+ Speakers",
      },
    ],
  },
  {
    id: 3,
    name: "Vadodara Literature Festival",
    mainCard: {
      title: "Vadodara Literature Festival",
      description: "Celebrating literary excellence and creative expression...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "800+ Attendees",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "20+ Authors",
      },
    ],
  },
  {
    id: 4,
    name: "IIMUN Leadership Conclave",
    mainCard: {
      title: "IIMUN Leadership Conclave",
      description: "International Model UN bringing global perspectives to campus...",
      image: "/assets/img/college/auditorium.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "1200+ Delegates",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "40+ Countries",
      },
    ],
  },
  {
    id: 5,
    name: "Projections",
    mainCard: {
      title: "Projections",
      description: "A dynamic film festival showcasing cinematic excellence...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "600+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "15+ Films",
      },
    ],
  },
  {
    id: 6,
    name: "Vadodara Film & Design Festival",
    mainCard: {
      title: "Vadodara Film & Design Festival",
      description: "Celebrating visual arts and innovative design...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/1st.png",
        label: "450+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "18+ Designers",
      },
    ],
  },
  {
    id: 7,
    name: "National Health & Skills Conclave",
    mainCard: {
      title: "National Health & Skills Conclave",
      description: "Empowering students with health and professional skills...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "2000+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "50+ Experts",
      },
    ],
  },
  {
    id: 8,
    name: "Vadodara Start up Festival",
    mainCard: {
      title: "Vadodara Start up Festival",
      description: "Nurturing entrepreneurship and innovation...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "350+ Startups",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "25+ Investors",
      },
    ],
  },
  {
    id: 9,
    name: "Udhyam",
    mainCard: {
      title: "Udhyam",
      description: "Entrepreneurship development program for students...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "200+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "10+ Mentors",
      },
    ],
  },
  {
    id: 10,
    name: "AgriFest",
    mainCard: {
      title: "AgriFest",
      description: "Celebrating agricultural innovation and sustainability...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "800+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "12+ Experts",
      },
    ],
  },
  {
    id: 11,
    name: "Pramaan",
    mainCard: {
      title: "Pramaan",
      description: "A platform for student research and innovation showcase...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "500+ Projects",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "20+ Categories",
      },
    ],
  },
  {
    id: 12,
    name: "Aviation Fest",
    mainCard: {
      title: "Aviation Fest",
      description: "Exploring careers and innovations in aviation...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "300+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "8+ Airlines",
      },
    ],
  },
  {
    id: 13,
    name: "NHSC",
    mainCard: {
      title: "NHSC",
      description: "National Health & Skills Conclave focused on wellness...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "1800+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "45+ Experts",
      },
    ],
  },
  {
    id: 14,
    name: "EXERGIA",
    mainCard: {
      title: "EXERGIA",
      description: "Energy and environmental sustainability initiative...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "400+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "15+ Organizations",
      },
    ],
  },
  {
    id: 15,
    name: "Cloudverse",
    mainCard: {
      title: "Cloudverse",
      description: "Cloud computing and technology innovation summit...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "600+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "10+ Tech Leaders",
      },
    ],
  },
  {
    id: 16,
    name: "NSD",
    mainCard: {
      title: "NSD",
      description: "National Science Day celebrating scientific achievements...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "1000+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "22+ Scientists",
      },
    ],
  },
  {
    id: 17,
    name: "ICSAFS",
    mainCard: {
      title: "ICSAFS",
      description: "International Conference on Social and Food Systems...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "700+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "35+ Scholars",
      },
    ],
  },
  {
    id: 18,
    name: "Women Startup Meet",
    mainCard: {
      title: "Women Startup Meet",
      description: "Empowering women entrepreneurs and innovators...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "250+ Entrepreneurs",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "12+ Mentors",
      },
    ],
  },
  {
    id: 19,
    name: "Vanijyam 2026",
    mainCard: {
      title: "Vanijyam 2026",
      description: "Commerce and business excellence festival...",
      image: "/assets/img/college/1st.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/4th.png",
        label: "900+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/8th.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/admin.png",
        label: "28+ Industries",
      },
    ],
  },
  {
    id: 20,
    name: "VADODARA VISUAL ART FESTIVAL 2026!",
    mainCard: {
      title: "VADODARA VISUAL ART FESTIVAL 2026!",
      description: "Contemporary art and visual expression celebration...",
      image: "/assets/img/college/8th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/admin.png",
        label: "500+ Artworks",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/1st.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/4th.png",
        label: "50+ Artists",
      },
    ],
  },
  {
    id: 21,
    name: "PIMC 2026",
    mainCard: {
      title: "PIMC 2026",
      description: "Pan-Indian Medical and health care conference...",
      image: "/assets/img/college/4th.png",
      cta: "Read more",
    },
    stats: [
      {
        image: "/assets/img/college/8th.png",
        label: "2500+ Participants",
      },
    ],
    videos: [
      {
        image: "/assets/img/college/admin.png",
        label: "Watch Video",
      },
      {
        image: "/assets/img/college/1st.png",
        label: "60+ Experts",
      },
    ],
  },
];

export function CurriculumOpportunitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 8; // Show 8 items visible at once
  const totalItems = curriculumEvents.length;
  const maxScroll = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    if (scrollOffset > 0) {
      const newOffset = scrollOffset - 1;
      setScrollOffset(newOffset);
      setIsTransitioning(true);
      setActiveIndex(newOffset);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (scrollOffset < maxScroll) {
      const newOffset = scrollOffset + 1;
      setScrollOffset(newOffset);
      setIsTransitioning(true);
      setActiveIndex(newOffset);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleItemClick = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
    
    // Auto-scroll to make the clicked item visible
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
        {/* Header */}
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-light text-[#111827] md:text-5xl">
            One Curriculum With Enriching <br></br> Learning Opportunities
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Throughout the University, students across every faculty experience the most enriching and thrilling
            academic events, which allow them to gain the finest exposure to learning, creativity, and innovation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left: Event List Carousel */}
          <div className="space-y-4">
            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={scrollOffset === 0}
                className="h-8 w-8 rounded-full border border-[#3B82F6] text-[#3B82F6] transition disabled:opacity-40 hover:bg-[#3B82F6] hover:text-white flex items-center justify-center"
                aria-label="Scroll up"
              >
                <ChevronUp size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={scrollOffset >= maxScroll}
                className="h-8 w-8 rounded-full border border-[#3B82F6] text-[#3B82F6] transition disabled:opacity-40 hover:bg-[#3B82F6] hover:text-white flex items-center justify-center"
                aria-label="Scroll down"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Event List Container */}
            <div ref={containerRef} className="space-y-2 h-96 overflow-hidden">
              {visibleItems.map((event) => {
                const isActive = event.id === curriculumEvents[activeIndex].id;

                return (
                  <button
                    key={event.id}
                    onClick={() => handleItemClick(curriculumEvents.indexOf(event))}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                      isActive
                        ? "text-[#3B82F6] font-semibold bg-[#E5E7EB]"
                        : "text-[#6B7280] font-normal hover:text-[#3B82F6] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <div className="text-xs md:text-sm line-clamp-2">{event.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Content Grid */}
          <div
            className={`transition-opacity duration-300 ${isTransitioning ? "opacity-75" : "opacity-100"}`}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr_1fr]">
              {/* Left Column - Highlight Card */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[20px] bg-[#3B82F6] p-5 md:p-6 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3 h-10 w-10 rounded-lg bg-white/20" />
                    <h3 className="mb-3 text-sm md:text-base font-bold leading-tight">
                      {currentEvent.mainCard.title}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-white/90">
                      {currentEvent.mainCard.description}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-[#3B82F6] transition hover:bg-white/90">
                    {currentEvent.mainCard.cta}
                    <span aria-hidden="true">›</span>
                  </button>
                </div>
              </div>

              {/* Center Column - Main Image */}
              <div className="relative overflow-hidden rounded-[20px] bg-black h-80 md:h-full">
                <Image
                  src={currentEvent.mainCard.image}
                  alt={currentEvent.mainCard.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Right Column - Two Stacked Cards */}
              <div className="space-y-4">
                {/* Stats Card */}
                {currentEvent.stats.map((stat, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-[20px] bg-[#b8754f] p-5 md:p-6 text-white h-40">
                    <div className="relative h-full w-full">
                      <Image
                        src={stat.image}
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

                {/* Video Cards */}
                {currentEvent.videos.map((video, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-[20px] bg-black h-40 group">
                    <Image
                      src={video.image}
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
