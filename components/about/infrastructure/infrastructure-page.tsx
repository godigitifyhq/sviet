"use client";

import { useMemo, useState } from "react";

import { CategoryTabs } from "@/components/about/infrastructure/category-tabs";
import { FacilityCard } from "@/components/about/infrastructure/facility-card";
import { ImageGrid } from "@/components/about/infrastructure/image-grid";
import { SectionHeader } from "@/components/about/infrastructure/section-header";
import { SectionWrapper } from "@/components/about/infrastructure/section-wrapper";

type FacilityCategory = "Campus" | "Academic" | "Research" | "Sports" | "Sustainability";

type FacilityItem = {
  title: string;
  category: FacilityCategory;
  imageSrc: string;
  imageAlt: string;
};

const CATEGORY_TABS = ["All", "Campus", "Academic", "Research", "Sports", "Sustainability"] as const;

const FACILITY_ITEMS: FacilityItem[] = [
  {
    title: "Modern Campus Layout",
    category: "Campus",
    imageSrc: "/assets/img/college/main_gate.png",
    imageAlt: "SVIET modern campus entrance and layout",
  },
  {
    title: "Central Greens",
    category: "Campus",
    imageSrc: "/assets/img/college/1st.png",
    imageAlt: "SVIET central greens on campus",
  },
  {
    title: "Outdoor Spaces",
    category: "Campus",
    imageSrc: "/assets/img/campus-life/image2.png",
    imageAlt: "SVIET outdoor spaces for student activities",
  },
  {
    title: "Lecture Halls",
    category: "Academic",
    imageSrc: "/assets/img/campus-life/audi.png",
    imageAlt: "SVIET lecture halls with classroom setup",
  },
  {
    title: "Library Facilities",
    category: "Academic",
    imageSrc: "/assets/img/campus-life/image1.png",
    imageAlt: "SVIET library facilities and study resources",
  },
  {
    title: "Computer Labs",
    category: "Academic",
    imageSrc: "/assets/img/college/4th.png",
    imageAlt: "SVIET computer labs and technical workstations",
  },
  {
    title: "Research Centres",
    category: "Research",
    imageSrc: "/assets/img/college/8th.png",
    imageAlt: "SVIET research centres and advanced learning spaces",
  },
  {
    title: "Innovation Labs",
    category: "Research",
    imageSrc: "/assets/img/college/global_recognition.png",
    imageAlt: "SVIET innovation labs for applied projects",
  },
  {
    title: "Playgrounds",
    category: "Sports",
    imageSrc: "/assets/img/campus-life/r1c2.png",
    imageAlt: "SVIET playground areas for sports and fitness",
  },
  {
    title: "Sports Complex",
    category: "Sports",
    imageSrc: "/assets/img/campus-life/r2c3.png",
    imageAlt: "SVIET sports complex infrastructure",
  },
  {
    title: "Solar Power Systems",
    category: "Sustainability",
    imageSrc: "/assets/img/college/banner_95.png",
    imageAlt: "Solar power systems supporting campus sustainability",
  },
  {
    title: "Rain Water Harvesting",
    category: "Sustainability",
    imageSrc: "/assets/img/campus-life/image4.png",
    imageAlt: "Rain water harvesting infrastructure on campus",
  },
  {
    title: "Waste Management",
    category: "Sustainability",
    imageSrc: "/assets/img/campus-life/r3c1.png",
    imageAlt: "Campus waste management and segregation systems",
  },
  {
    title: "Green Transportation",
    category: "Sustainability",
    imageSrc: "/assets/img/campus-life/r3c2.png",
    imageAlt: "Green transportation support infrastructure",
  },
];

const SUSTAINABILITY_ITEMS = [
  {
    title: "Renewable Energy Generation",
    description:
      "Distributed solar systems support academic blocks and utilities, reducing dependency on conventional energy.",
    imageSrc: "/assets/img/college/scholarship.png",
    imageAlt: "Renewable energy generation systems at SVIET",
  },
  {
    title: "Waste Water Treatment",
    description:
      "Treatment and reuse systems are designed to optimize water use across landscaping and non-potable needs.",
    imageSrc: "/assets/img/campus-life/image3.png",
    imageAlt: "Waste water treatment setup on the campus",
  },
  {
    title: "Tree Plantation",
    description:
      "Green belt planning and periodic plantation drives improve campus microclimate and ecological balance.",
    imageSrc: "/assets/img/college/1st.png",
    imageAlt: "Tree plantation initiatives in the SVIET campus",
  },
  {
    title: "Rain Water Harvesting",
    description:
      "Catchment and storage systems support groundwater recharge and long-term water conservation goals.",
    imageSrc: "/assets/img/campus-life/image4.png",
    imageAlt: "Rain water harvesting systems at SVIET",
  },
  {
    title: "Waste Recycling",
    description:
      "Segregation and recycling practices help reduce landfill impact and build responsible campus habits.",
    imageSrc: "/assets/img/campus-life/r2c1.png",
    imageAlt: "Waste recycling facilities on campus",
  },
  {
    title: "Mobility Support Infrastructure",
    description:
      "Pedestrian-first pathways and organized transit points improve accessibility and safer campus movement.",
    imageSrc: "/assets/img/campus-life/r1c1.png",
    imageAlt: "Mobility support infrastructure for students and staff",
  },
];

export function InfrastructurePage() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORY_TABS)[number]>("All");

  const filteredFacilities = useMemo(() => {
    if (activeCategory === "All") {
      return FACILITY_ITEMS;
    }

    return FACILITY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)]">
      <SectionWrapper
        aria-labelledby="infrastructure-heading"
        className="relative overflow-hidden border-b border-[#E5E7EB] bg-[linear-gradient(130deg,#EEF4FF_0%,#FFFFFF_52%,#F5F9FF_100%)]"
      >
        <div className="absolute -right-32 -top-25 hidden h-72 w-72 bg-[#BFDBFE]/30 blur-3xl md:block" aria-hidden="true" />
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7941d]">About SVIET</p>
            <h1 id="infrastructure-heading" className="mt-3 text-4xl font-bold tracking-tight text-[#f7941d] md:text-5xl">
              Infrastructure
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
              Our campus infrastructure is thoughtfully designed to blend innovation, sustainability, and functionality,
              enhancing academic excellence, research, and holistic student life.
            </p>
          </div>

          <span className="inline-flex items-center rounded-md border border-[#BFDBFE] bg-white px-4 py-2 text-sm font-semibold text-[#f7941d]">
            Virtual Background
          </span>
        </div>
      </SectionWrapper>

      <SectionWrapper aria-labelledby="campus-facilities-heading" className="border-b border-[#E5E7EB]">
        <SectionHeader id="campus-facilities-heading" title="Explore SVIET’s Campus Facilities" />

        <CategoryTabs categories={[...CATEGORY_TABS]} activeCategory={activeCategory} onCategoryChange={(category) => setActiveCategory(category as typeof activeCategory)} />

        <ImageGrid items={filteredFacilities} />
      </SectionWrapper>

      <SectionWrapper aria-labelledby="sustainability-heading" className="bg-[#F5F7FB]">
        <SectionHeader
          id="sustainability-heading"
          title="Sustainability Initiatives"
          description="SVIET continues to strengthen environmentally responsible infrastructure through energy, water, waste, and mobility interventions across campus."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUSTAINABILITY_ITEMS.map((item) => (
            <FacilityCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}