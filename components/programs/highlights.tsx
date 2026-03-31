import { Code2, Cpu, FlaskConical, Globe, Trophy, Users } from "lucide-react";

import { PROGRAM_HIGHLIGHTS } from "@/components/programs/data";

const HIGHLIGHT_ICONS = [Code2, FlaskConical, Globe, Users, Trophy, Cpu] as const;

type ProgramHighlightsSectionProps = {
  highlights: string[];
};

type HighlightItem = {
  title: string;
  description: string;
};

function normalizeHighlights(highlights: string[]) {
  if (highlights.length === 0) {
    return PROGRAM_HIGHLIGHTS;
  }

  return highlights.map((highlight) => ({ title: highlight, description: "" }));
}

export function ProgramHighlightsSection({ highlights }: ProgramHighlightsSectionProps) {
  const normalizedHighlights: readonly HighlightItem[] = normalizeHighlights(highlights);

  return (
    <section className="mx-auto mt-30 mb-15 w-full max-w-300 px-3 md:px-5">
      <p className="text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Why Choose This Program</p>
      <h2 className="mt-2 text-4xl font-extrabold">What Sets SVIET B.Tech CSE Apart</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {normalizedHighlights.map(({ title, description }, index) => {
          const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];

          return (
          <div key={title} className="rounded-xl border border-[#e9e9e9] bg-white px-4 py-8">
            <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff4ec]">
              <Icon className="h-4 w-4 text-[#f7941d]" />
            </div>
            <p className=" text-sm font-semibold text-[#333]">{title}</p>
            {description ? <p className="mt-1.5 text-xs text-[#666]">{description}</p> : null}
          </div>
          );
        })}
      </div>
    </section>
  );
}
