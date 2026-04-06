import type { Metadata } from "next";
import Link from "next/link";

const HIGHLIGHTS = [
  "International-friendly admissions guidance",
  "Academic mentoring and language support",
  "Safe and connected campus environment",
  "Career-oriented learning pathways",
] as const;

export const metadata: Metadata = {
  title: "International",
  description: "Information for international students exploring academics, support, and campus life at SVIET.",
};

export default function InternationalPage() {
  return (
    <main className="bg-white text-black">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEA700]">Global Admissions</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">International</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70">
            SVIET welcomes learners from diverse countries with structured academic support and a student-first campus experience.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <article key={item} className="border border-black/10 bg-white p-6">
                <h2 className="text-xl font-semibold">{item}</h2>
              </article>
            ))}
          </div>

          <div className="mt-8 border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Need help with eligibility or documents?</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Our admissions team can guide you through program selection, documentation, and next steps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center border border-[#FEA700]/50 bg-[#FEA700] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#FEA700]/85"
              >
                Explore Admissions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-black/20 bg-white px-5 py-2 text-sm font-semibold text-black transition hover:border-[#FEA700]/50 hover:text-[#FEA700]"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
