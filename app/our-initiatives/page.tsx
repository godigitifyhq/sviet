import type { Metadata } from "next";
import Link from "next/link";

const INITIATIVES = [
  {
    title: "Industry-Aligned Learning",
    description:
      "Curriculum updates and practical modules designed with industry relevance and employability in mind.",
  },
  {
    title: "Innovation & Startup Support",
    description:
      "Mentorship, project incubation, and entrepreneurial guidance for student-led problem solving.",
  },
  {
    title: "Community Impact Programs",
    description:
      "Service-led initiatives that build social responsibility, leadership, and civic engagement.",
  },
  {
    title: "Research & Skill Development",
    description:
      "Hands-on research opportunities, workshops, and technical upskilling across departments.",
  },
] as const;

export const metadata: Metadata = {
  title: "Our Initiatives",
  description: "Explore SVIET initiatives focused on innovation, impact, and student development.",
};

export default function OurInitiativesPage() {
  return (
    <main className="bg-white text-black">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEA700]">SVIET</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Our Initiatives</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70">
            Focused actions that strengthen academic quality, innovation culture, and future-ready outcomes for students.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-14 md:grid-cols-2 md:px-6 md:py-16">
          {INITIATIVES.map((item) => (
            <article key={item.title} className="border border-black/10 bg-white p-6">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-12 md:flex-row md:items-center md:px-6">
          <p className="text-sm text-black/70">Want to collaborate with SVIET initiatives?</p>
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#FEA700]/50 bg-[#FEA700] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#FEA700]/85"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
