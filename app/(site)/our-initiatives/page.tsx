import type { Metadata } from "next";
import Link from "next/link";

const D4F_INITIATIVES = [
  {
    title: "SEO Readiness Track",
    description:
      "Students learn search visibility, content structuring, and digital discoverability to build market-relevant communication skills.",
  },
  {
    title: "SGO Career Operations",
    description:
      "Structured Student Growth Operations support combines mentoring, execution planning, and measurable progress checkpoints.",
  },
  {
    title: "Placement Acceleration Modules",
    description:
      "Interview simulations, recruiter-focused preparation, and role-specific training improve conversion from preparation to offers.",
  },
  {
    title: "Innovation to Market Projects",
    description:
      "Students work on practical ideas from prototype stage to deployment-ready outcomes with faculty and industry guidance.",
  },
] as const;

const D4F_OUTCOMES = [
  {
    title: "Better Visibility",
    metric: "SEO-led digital profiles",
    detail: "Students build stronger online portfolios and project discoverability.",
  },
  {
    title: "Better Readiness",
    metric: "SGO progress framework",
    detail: "Continuous mentoring and assessment improve consistency before placement season.",
  },
  {
    title: "Better Conversion",
    metric: "Placement-focused execution",
    detail: "Training tracks are mapped to hiring patterns, interviews, and role expectations.",
  },
] as const;

export const metadata: Metadata = {
  title: "D4F Initiatives | SVIET",
  description:
    "Explore SVIET D4F initiatives focused on SEO readiness, SGO mentoring, innovation execution, and stronger placement outcomes.",
};

export default function OurInitiativesPage() {
  return (
    <main className="bg-white text-black">
      <section className="border-b border-[#E5E7EB] bg-[linear-gradient(130deg,#EEF4FF_0%,#FFFFFF_52%,#F5F9FF_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">D4F at SVIET</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">Future-Focused Initiatives Built for Outcomes</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#6B7280]">
            D4F is SVIET&apos;s execution framework for turning learning into visible progress through skills, digital
            readiness, innovation, and placement-focused growth.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4B5563]">
            SVIET delivers these initiatives as a focused institution within the broader SVGOI ecosystem, ensuring
            students get both institution-level attention and group-level opportunities.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-14 md:grid-cols-2 md:px-6 md:py-16">
          {D4F_INITIATIVES.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#DCE7FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_100%)] p-6 shadow-[0_8px_24px_rgba(30,42,120,0.08)]">
              <h2 className="text-2xl font-semibold text-[#111827]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFF]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Why D4F Matters for Students</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {D4F_OUTCOMES.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#DCE7FF] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f7941d]">{item.metric}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/placements"
              className="inline-flex items-center rounded-md bg-[#f7941d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d97706]"
            >
              Explore Placement Outcomes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-[#BFDBFE] bg-white px-5 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#EFF6FF]"
            >
              Connect with SVIET
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
