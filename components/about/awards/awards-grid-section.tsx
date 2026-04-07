import Image from "next/image";
import { AWARDS_RECORDS } from "@/components/about/awards/awards-data";

export function AwardsGridSection() {
  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <h2 className="text-4xl font-bold leading-tight text-[#111827] md:text-6xl">
          Explore Our
          <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text text-transparent"> Awards, Rankings &amp; Ratings</span>
        </h2>

        <div className="mt-8 inline-flex rounded-full border border-[#c7d2fe] bg-[#eef2ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1e3a8a]">
          National &amp; International Accomplishments
        </div>

        <p className="mt-6 flex items-center gap-2 text-lg font-semibold text-[#111827]">
          <span className="text-[#24b4be]">▸</span>
          Our Awards, Rankings and Ratings
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {AWARDS_RECORDS.map((item) => (
            <article key={item.id} className="rounded-xl border border-[#e5e7eb] bg-white p-5 transition hover:shadow-md">
              <div className="relative h-12 w-32">
                <Image src={item.logoSrc} alt={item.logoAlt} fill sizes="128px" className="object-contain object-left" />
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#374151]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
