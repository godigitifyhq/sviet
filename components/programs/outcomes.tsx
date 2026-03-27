import { Award, Briefcase, Building2, TrendingUp } from "lucide-react";

import { PLACEMENT_OUTCOMES } from "@/components/programs/data";

const STAT_ICONS = [TrendingUp, Award, Briefcase, Building2] as const;

export function ProgramOutcomesSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Placement Outcomes</p>
          <h2 className="mt-1 text-4xl font-extrabold">Where Our Graduates Land</h2>
        </div>
        <div className="rounded-full border border-[#eaeaea] bg-[#f5f5f5] px-3 py-1.5 text-xs text-[#777]">
          Based on last year&apos;s placements (2024)
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-4">
        {PLACEMENT_OUTCOMES.map(([label, value, description], index) => {
          const Icon = STAT_ICONS[index];

          return (
          <div key={label} className="rounded-xl border border-[#e8e8e8] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff4ec]">
              <Icon className="h-5 w-5 text-[#f7941d]" />
            </div>
            <p className="text-sm text-[#666]">{label}</p>
            <p className="mt-2 text-4xl font-extrabold">{value}</p>
            <p className="mt-1 text-xs text-[#7a7a7a]">{description}</p>
          </div>
          );
        })}
      </div>
    </section>
  );
}
