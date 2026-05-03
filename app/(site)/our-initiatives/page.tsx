import type { Metadata } from "next";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Lightbulb,
  MessageSquare,
  Rocket,
  Trophy,
  Users,
} from "lucide-react";

import { FounderSection } from "@/components/initiatives/founder-section";

const UNIQUES_POINTS = [
  {
    title: "Business strategy and execution",
    icon: BriefcaseBusiness,
  },
  {
    title: "Real-world problem solving",
    icon: Lightbulb,
  },
  {
    title: "Communication and leadership",
    icon: MessageSquare,
  },
  {
    title: "Startup and consulting exposure",
    icon: Building2,
  },
] as const;

const UNIQUES_CARDS = [
  "Live startup exposure",
  "Industry-oriented learning",
  "Execution-focused approach",
  "Community-driven growth",
] as const;

const ENTREPRENEURSHIP_CARDS = [
  {
    value: "15+",
    title: "Student Startups",
    description:
      "Early-stage ventures supported through mentoring and practical guidance.",
  },
  {
    value: "Live",
    title: "Startup Exposure (Godigitify)",
    description:
      "Students learn from real operating startup workflows and execution cycles.",
  },
  {
    value: "MVP",
    title: "Workshops on MVP & Business Models",
    description:
      "Sessions focused on validating ideas, product thinking, and market fit.",
  },
  {
    value: "Growth",
    title: "Growth & Execution Learning",
    description:
      "Hands-on learning that builds consistency in strategy, delivery, and outcomes.",
  },
] as const;

const FOUNDER_DESCRIPTION = [
  "A distinguished instructional management specialist with an illustrious track record spanning over a decade. His expertise traverses the realms of Academics, Research & Innovation, Administration, Public Relations, Business Strategy, Brand Management, and Corporate Relations.",
  "He stands as the proud Founder of the pioneering IT incubation center within our campus, aptly named UNIQUE ZONE. This incubation center stands as a testament to his commitment to providing a nurturing environment for students, where innovative ideas evolve into practical solutions. Through his transformative leadership, he has fostered an ecosystem that empowers students to transcend boundaries and turn their aspirations into reality.",
  "As the Founder of this community, he epitomizes a strategic thinker and a dynamic force in the Corporate & Education Sector. His vision extends beyond conventional boundaries, driving a culture of excellence, creativity, and innovation.",
] as const;

const FOUNDER_SOCIALS = {
  twitter: "#",
  instagram: "#",
  linkedin: "#",
} as const;

const SUPER60_POINTS = [
  "Advanced technical training",
  "Quantitative and logical reasoning",
  "Communication and personality development",
  "Industry-level tools",
] as const;

const COMMUNITY_CARDS = [
  {
    title: "ISTE SVIET Chapter",
    points: [
      "Technical workshops",
      "Leadership opportunities",
      "Industry networking",
    ],
  },
  {
    title: "Google Developer Student Club",
    points: [
      "Developer meetups",
      "Build-focused sessions",
      "Peer-led collaboration",
    ],
  },
  {
    title: "Developer and Coding Communities",
    points: ["Coding communities", "Problem-solving culture", "Peer learning"],
  },
] as const;

const FLAGSHIP_EVENTS = [
  {
    title: "Bharat TechXperience",
    description:
      "A platform for students to showcase innovation, prototypes, and execution thinking.",
    imageSrc: "/assets/img/college/global_recognition.png",
  },
  {
    title: "Elevate",
    description:
      "Student-focused festival combining creativity, collaboration, and innovation-oriented engagement.",
    imageSrc: "/assets/img/students/slider-img-1.png",
  },
  {
    title: "Global Future Summit",
    description:
      "Industry and academic perspectives on emerging trends, careers, and future-ready skills.",
    imageSrc: "/assets/img/college/auditorium.png",
  },
  {
    title: "TEDx SVIET",
    description:
      "Ideas worth sharing through student participation, dialogue, and thought leadership.",
    imageSrc: "/assets/img/college/main_gate.png",
  },
  {
    title: "DevFest Chandigarh",
    description:
      "Community-led technology event with practical exposure to tools and trends.",
    imageSrc: "/assets/img/campus-life/image1.png",
  },
] as const;

const SKILL_CARDS = [
  {
    title: "Coding competitions and hackathons",
    icon: Code2,
  },
  {
    title: "Business ideathons",
    icon: BriefcaseBusiness,
  },
  {
    title: "Workshops on emerging technologies",
    icon: Rocket,
  },
  {
    title: "Soft skills training",
    icon: Users,
  },
] as const;

export const metadata: Metadata = {
  title: "Innovation & Student Initiatives | SVIET",
  description:
    "Explore innovation platforms, student initiatives, startup exposure, and professional communities at SVIET.",
};

export default function OurInitiativesPage() {
  return (
    <main className="bg-[#ffffff] text-[#111827]">
      <section className="relative overflow-hidden border-b border-[#E5E7EB] bg-[linear-gradient(180deg,#FFF7ED_0%,#FFFFFF_38%,#FFFFFF_100%)]">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f7941d] md:text-sm">
              Our Initiatives
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#0f172a] md:text-6xl lg:text-[4.65rem]">
              Innovation, entrepreneurship, and student leadership.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B5563] md:text-lg">
              From startups to hackathons, students gain real-world exposure
              that prepares them for both corporate careers and entrepreneurial
              journeys.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
              <span className="inline-flex items-center border border-[#f7941d]/20 bg-[#fff4e8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7941d]">
                Live startup exposure
              </span>
              <span className="inline-flex items-center border border-[#dbeafe] bg-[#eff6ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Industry-oriented learning
              </span>
            </div>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 sm:gap-4">
            <article className="overflow-hidden border border-[#DCE7FF] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.10)] sm:col-span-2">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-[#f9fafb] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
                  U-Zone
                </p>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  The Uniques
                </span>
              </div>
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/img/banner/uniq11.jpg"
                  alt="The Uniques initiative banner"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </article>

            <article className="overflow-hidden border border-[#DCE7FF] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:col-span-2">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-[#f9fafb] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  S-Zone
                </p>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  Super 60
                </span>
              </div>
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/img/banner/s60.jpeg"
                  alt="Super 60 initiative banner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex rounded-full border border-[#dbeafe] bg-[#eff6ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
              Real-World Growth
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111827] md:text-5xl">
              Built for real-world growth.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg">
              From startups to hackathons, students gain real-world exposure
              that prepares them for both corporate careers and entrepreneurial
              journeys.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Industry exposure through projects",
                "Structured support for new ideas",
                "Practical learning with outcomes",
                "Confidence for professional environments",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l-4 border-[#f7941d] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF9F2_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-sm font-semibold text-[#111827]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden border border-[#DCE7FF] bg-[#EFF6FF] shadow-[0_14px_36px_rgba(30,42,120,0.10)]">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/assets/img/college/main.jpeg"
                  alt="Lab environment focused on student innovation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              The Uniques
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              From college to corporate.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              The Uniques is a student-driven initiative focused on building
              future consultants, entrepreneurs, and leaders.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden border border-[#DCE7FF] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-5/4 w-full">
                <Image
                  src="/assets/img/college/lab.jpeg"
                  alt="The Uniques lab and collaboration environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {UNIQUES_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="border border-[#DCE7FF] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center bg-[#fff4e8] text-[#f7941d]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-sm font-semibold leading-snug text-[#111827] md:text-base">
                        {item.title}
                      </p>
                    </article>
                  );
                })}
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#111827] md:text-2xl">
                What sets The Uniques apart
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {UNIQUES_CARDS.map((item) => (
                  <article
                    key={item}
                    className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] px-4 py-3 text-sm font-medium text-[#1F2937] shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                  >
                    {item}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Entrepreneurship
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              Entrepreneurship and startup ecosystem.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              SVIET fosters innovation through hands-on startup exposure and
              incubation support.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ENTREPRENEURSHIP_CARDS.map((card, index) => (
              <article
                key={card.title}
                className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl font-black text-[#f7941d]">
                  {card.value}
                </p>
                <p className="mt-2 text-lg font-semibold text-[#111827]">
                  {String(index + 1).padStart(2, "0")}. {card.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-[#f7941d] bg-[#fff7ed] px-5 py-4 text-sm font-semibold text-[#1f2937]">
            Students do not just learn entrepreneurship; they experience it.
          </div>
        </div>
      </section>

      <FounderSection
        name="Ankur Gill"
        role="Director of Operations"
        image="/assets/img/college/management/ankur-sir.jpg"
        description={FOUNDER_DESCRIPTION}
        socials={FOUNDER_SOCIALS}
        ctaHref="/about"
      />

      <section className="bg-[#F8FAFF] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Super 60
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              Elite performance batch.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              A high-performance batch designed to go beyond traditional
              learning.
            </p>

            <div className="mt-8 space-y-3">
              {SUPER60_POINTS.map((point) => (
                <article
                  key={point}
                  className="flex items-start gap-3 border border-[#DCE7FF] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                >
                  <Trophy className="mt-0.5 h-4.5 w-4.5 text-[#2563EB]" />
                  <p className="text-sm font-medium text-[#1F2937]">{point}</p>
                </article>
              ))}
            </div>

            <article className="mt-6 border border-[#BFDBFE] bg-[#EFF6FF] p-5">
              <p className="text-sm font-semibold text-[#1E3A8A]">
                Prepared for top placements, competitive environments, and
                leadership roles.
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden border border-[#DCE7FF] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/assets/img/s60.jpg"
                alt="Super 60 lab and community environment"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Communities
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              Communities and professional chapters.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Hands-on learning through collaboration and real-world projects.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {COMMUNITY_CARDS.map((card) => (
              <article
                key={card.title}
                className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-[#111827]">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-[#4B5563]"
                    >
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f7941d]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Flagship events
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              Flagship events and platforms.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Students gain exposure through competitions, industry interaction,
              and real-world problem-solving.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {FLAGSHIP_EVENTS.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden border border-[#DCE7FF] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-4/3 w-full bg-[#EFF6FF]">
                  <Image
                    src={event.imageSrc}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 20vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#111827]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Skills and creativity
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#111827] md:text-5xl">
              Skills, creativity, and career development.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Structured engagements that strengthen technical ability,
              communication, and career confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_CARDS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                >
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center bg-[#eff6ff] text-[#2563EB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-snug text-[#1F2937]">
                    {item.title}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f172a] py-16 md:py-20">
        <Image
          src="/assets/img/students/1.png"
          alt="SVIET culture and student leadership"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl border-l-4 border-[#f7941d] bg-black/20 p-6 backdrop-blur-[2px] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f7941d] md:text-sm">
              Student culture
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              A culture that builds future leaders.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/90 md:text-base">
              SVIET&apos;s ecosystem encourages innovation, experimentation, and
              student-led initiatives, preparing individuals to take on
              real-world challenges with confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
