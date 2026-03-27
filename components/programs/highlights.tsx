import { Code2, Cpu, FlaskConical, Globe, Trophy, Users } from "lucide-react";

import { PROGRAM_HIGHLIGHTS } from "@/components/programs/data";

const HIGHLIGHT_ICONS = [Code2, FlaskConical, Globe, Users, Trophy, Cpu] as const;

export function ProgramHighlightsSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-300 px-3 md:px-5">
      <p className="text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Why Choose This Program</p>
      <h2 className="text-4xl font-extrabold">What Sets SVIET B.Tech CSE Apart</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {PROGRAM_HIGHLIGHTS.map(([title, description], index) => {
          const Icon = HIGHLIGHT_ICONS[index];

          return (
          <div key={title} className="rounded-xl border border-[#e9e9e9] bg-white p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff4ec]">
              <Icon className="h-4 w-4 text-[#f7941d]" />
            </div>
            <p className="text-sm font-semibold text-[#333]">{title}</p>
            <p className="mt-1.5 text-xs text-[#666]">{description}</p>
          </div>
          );
        })}
      </div>
    </section>
  );
}
