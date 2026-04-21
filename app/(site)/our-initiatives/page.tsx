import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness, Building2, Code2, Lightbulb, MessageSquare, Rocket, Trophy, Users } from "lucide-react";

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
    description: "Early-stage ventures supported through mentoring and practical guidance.",
  },
  {
    value: "Live",
    title: "Startup Exposure (Godigitify)",
    description: "Students learn from real operating startup workflows and execution cycles.",
  },
  {
    value: "MVP",
    title: "Workshops on MVP & Business Models",
    description: "Sessions focused on validating ideas, product thinking, and market fit.",
  },
  {
    value: "Growth",
    title: "Growth & Execution Learning",
    description: "Hands-on learning that builds consistency in strategy, delivery, and outcomes.",
  },
] as const;

const SUPER60_POINTS = [
  "Advanced technical training",
  "Quantitative and logical reasoning",
  "Communication and personality development",
  "Industry-level tools",
] as const;

const COMMUNITY_CARDS = [
  {
    title: "ISTE SVIET Chapter",
    points: ["Technical workshops", "Leadership opportunities", "Industry networking"],
  },
  {
    title: "Google Developer Student Club",
    points: ["Developer meetups", "Build-focused sessions", "Peer-led collaboration"],
  },
  {
    title: "Developer and Coding Communities",
    points: ["Coding communities", "Problem-solving culture", "Peer learning"],
  },
] as const;

const FLAGSHIP_EVENTS = [
  {
    title: "Bharat TechXperience",
    description: "A platform for students to showcase innovation, prototypes, and execution thinking.",
    imageSrc: "/assets/img/college/global_recognition.png",
  },
  {
    title: "Elevate",
    description: "Student-focused festival combining creativity, collaboration, and innovation-oriented engagement.",
    imageSrc: "/assets/img/students/slider-img-1.png",
  },
  {
    title: "Global Future Summit",
    description: "Industry and academic perspectives on emerging trends, careers, and future-ready skills.",
    imageSrc: "/assets/img/college/auditorium.png",
  },
  {
    title: "TEDx SVIET",
    description: "Ideas worth sharing through student participation, dialogue, and thought leadership.",
    imageSrc: "/assets/img/college/main_gate.png",
  },
  {
    title: "DevFest Chandigarh",
    description: "Community-led technology event with practical exposure to tools and trends.",
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
    <main className="bg-white text-black">
      <section className="relative h-200  overflow-hidden border-b border-[#E5E7EB]">
        <Image
          src="/assets/img/banner/uniq11.jpg"
          alt="Innovation and student initiatives at SVIET"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">Built for Real-World Growth</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#6B7280] md:text-base">
              From startups to hackathons, students gain real-world exposure that prepares them for both corporate
              careers and entrepreneurial journeys.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#DCE7FF] bg-[#EFF6FF] shadow-[0_10px_28px_rgba(30,42,120,0.08)]">
            <Image
              src="/assets/img/students/image (2).png"
              alt="Students collaborating on innovation projects"
              width={900}
              height={560}
              className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02] md:h-84"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">The Uniques - From College to Corporate</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            The Uniques is a student-driven initiative focused on building future consultants, entrepreneurs, and
            leaders.
          </p>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="relative overflow-hidden rounded-2xl border border-[#DCE7FF] bg-white shadow-[0_10px_28px_rgba(30,42,120,0.08)]">
              <Image
                src="/assets/img/students/Placement-Mockup-1.png"
                alt="The Uniques student collaboration"
                width={900}
                height={720}
                className="h-80 w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {UNIQUES_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="rounded-xl border border-[#DCE7FF] bg-white p-4 shadow-[0_6px_20px_rgba(30,42,120,0.06)]">
                      <Icon className="h-5 w-5 text-[#f7941d]" />
                      <p className="mt-2 text-sm font-semibold text-[#111827]">{item.title}</p>
                    </article>
                  );
                })}
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#111827]">What Sets The Uniques Apart</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {UNIQUES_CARDS.map((item) => (
                  <article key={item} className="rounded-lg border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] px-4 py-3 text-sm font-medium text-[#1F2937]">
                    {item}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Entrepreneurship &amp; Startup Ecosystem</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            SVIET fosters innovation through hands-on startup exposure and incubation support.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ENTREPRENEURSHIP_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-5 shadow-[0_8px_24px_rgba(30,42,120,0.08)] transition hover:-translate-y-0.5"
              >
                <p className="text-3xl font-bold text-[#f7941d]">{card.value}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#111827]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{card.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm font-semibold text-[#1F2937]">
            Students do not just learn entrepreneurship; they experience it.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFF]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Super 60 - Elite Performance Batch</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B7280] md:text-base">
              A high-performance batch designed to go beyond traditional learning.
            </p>

            <div className="mt-6 space-y-3">
              {SUPER60_POINTS.map((point) => (
                <article key={point} className="flex items-start gap-3 rounded-lg border border-[#DCE7FF] bg-white px-4 py-3">
                  <Trophy className="mt-0.5 h-4.5 w-4.5 text-[#2563EB]" />
                  <p className="text-sm font-medium text-[#1F2937]">{point}</p>
                </article>
              ))}
            </div>

            <article className="mt-6 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-4">
              <p className="text-sm font-semibold text-[#1E3A8A]">
                Prepared for top placements, competitive environments, and leadership roles.
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#DCE7FF] bg-white shadow-[0_10px_28px_rgba(30,42,120,0.08)]">
            <Image
              src="/assets/img/campus-life/audi.png"
              alt="Super 60 advanced classroom training"
              width={920}
              height={720}
              className="h-84 w-full object-cover transition duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Communities &amp; Professional Chapters</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Hands-on learning through collaboration and real-world projects.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {COMMUNITY_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-5 shadow-[0_8px_24px_rgba(30,42,120,0.08)] transition hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-[#111827]">{card.title}</h3>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#4B5563]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f7941d]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Flagship Events &amp; Platforms</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Students gain exposure through competitions, industry interaction, and real-world problem-solving.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {FLAGSHIP_EVENTS.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-[#DCE7FF] bg-white shadow-[0_8px_24px_rgba(30,42,120,0.08)] transition hover:-translate-y-0.5"
              >
                <div className="relative h-42 w-full overflow-hidden bg-[#EFF6FF]">
                  <Image src={event.imageSrc} alt={event.title} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 20vw" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#111827]">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Skills, Creativity &amp; Career Development</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Structured engagements that strengthen technical ability, communication, and career confidence.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_CARDS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-5 text-center shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#1F2937]">{item.title}</p>
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
        <div className="relative mx-auto max-w-7xl px-4 text-white md:px-6">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">A Culture That Builds Future Leaders</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
            SVIET&apos;s ecosystem encourages innovation, experimentation, and student-led initiatives, preparing
            individuals to take on real-world challenges with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}
