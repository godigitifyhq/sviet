import Image from "next/image";

import { FEATURED_PLACEMENTS } from "@/components/placements/placement-data";

export function PlacementSuccessBanner() {
  return (
    <section className="w-full bg-[#f8fafc] pt-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7941d]">
            Placement Spotlight
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#0b3b8f] md:text-6xl">
            Placement Excellence
          </h2>
          <p className="mt-3 text-sm text-[#4b5563] md:text-base">
            Consistent outcomes built through training quality, industry
            alignment, and focused execution.
          </p>
        </div>

        {/* ── 19 LPA banner — prominent ── */}
        <div className="mx-auto mt-10 max-w-7xl md:mt-16">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#fea700]/40 bg-linear-to-br from-[#0a2f72] to-[#0b3b8f] px-6 py-8 md:h-80 md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 rounded-3xl bg-[#fea700]/5 blur-2xl" />

            <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1.3fr_1fr] md:gap-6">
              <div className="relative z-10 flex flex-col justify-center md:pr-2">
                <span className="inline-block rounded-full bg-[#fea700]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#fea700]">
                  Top Placement · 2026
                </span>
                <p className="mt-4 text-[2.4rem] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#fea700] md:text-[3rem]">
                  Laxmi
                  <br />
                  Vaishnavi
                </p>
                <p className="mt-3 text-sm font-medium text-white/70">
                  Caelius Consulting
                </p>
              </div>

              <div className="relative flex h-64 items-end justify-center overflow-visible md:h-80">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-56 -translate-x-1/2 rounded-full bg-[#fea700]/25 blur-3xl" />
                <Image
                  src="/assets/img/students/11.png"
                  alt="Laxmi and Vaishnavi — 19 LPA placement at Caelius Consulting"
                  width={640}
                  height={640}
                  priority
                  className="absolute bottom-0 z-20 h-full w-auto max-w-none object-contain object-bottom"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center md:items-end md:text-right">
                <div>
                  <p className="text-base font-semibold leading-tight text-white md:text-lg">
                    Caelius Consulting
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-widest text-white/70">
                    2026 Batch
                  </p>
                </div>
                <p className="text-6xl font-extrabold leading-none tracking-tight text-[#fea700] md:text-7xl">
                  19 LPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlacementSecondaryBanner() {
  const [topPlacement, runnerUpPlacement] = FEATURED_PLACEMENTS;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
      <div className="relative overflow-visible rounded-3xl border border-[#dbe6ff] bg-linear-to-br from-[#0b3b8f] to-[#133f92] px-6 py-8 md:h-72 md:px-10 md:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-18 -bottom-20 h-56 w-56 rounded-full border border-white/10" />

        <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1.2fr_0.95fr] md:gap-6">
          <div className="relative z-10 flex flex-col justify-center md:pr-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Our Top Placements
            </p>
            <p className="mt-3 max-w-60 text-[2.1rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#fea700] md:max-w-65 md:text-[2.5rem]">
              {topPlacement.name}
              <br />
              {runnerUpPlacement.name}
            </p>
          </div>

          <div className="relative flex h-56 items-end justify-center overflow-visible md:h-64">
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#fea700]/20 blur-3xl md:h-28 md:w-52" />
            <Image
              src="/assets/img/students/taks.png"
              alt="Top placement highlight for the latest 12 LPA achievers"
              width={560}
              height={560}
              className="absolute bottom-2! z-20 h-64 w-auto max-w-none object-contain object-bottom md:-bottom-10 md:h-96"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
            <div>
              <p className="text-sm font-semibold leading-tight text-white md:text-[1.05rem]">
                {topPlacement.company}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-white/80">
                2027 Batch
              </p>
            </div>
            <p className="text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl">
              {topPlacement.packageLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
