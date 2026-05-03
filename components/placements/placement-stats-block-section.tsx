import { PLACEMENT_KEY_STATS } from "@/components/placements/placement-data";

export function PlacementStatsBlockSection() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl bg-linear-to-br from-[#ffffff] to-[#f8f9fb] px-5 py-10 md:mt-14 md:rounded-[30px] md:px-10 md:py-16">
      <div className="mb-8 rounded-2xl border border-[#dbe6ff] bg-white px-5 py-4 text-center md:mb-10">
        <p className="text-3xl font-extrabold leading-none tracking-[-0.03em] text-[#0b3b8f] md:text-5xl">
          {PLACEMENT_KEY_STATS[0].value}
        </p>
        <p className="mt-2 text-sm font-medium text-black/75 md:text-base">
          {PLACEMENT_KEY_STATS[0].label}
        </p>
      </div>

      <div className="grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div className="flex flex-col items-center justify-center text-center md:border-r-2 md:border-black/15 md:pr-10">
          <p className="text-5xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[6.5rem]">
            {PLACEMENT_KEY_STATS[1].value}
          </p>
          <p className="mt-4 text-lg font-medium text-black/75 md:mt-6 md:text-3xl">
            {PLACEMENT_KEY_STATS[1].label}
          </p>
        </div>

        <div className="grid gap-6 md:gap-0">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr] md:gap-5 md:pb-8">
            <p className="text-4xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[5rem]">
              {PLACEMENT_KEY_STATS[2].value}
            </p>
            <p className="text-lg font-medium text-black/75 md:pt-2 md:text-3xl">
              {PLACEMENT_KEY_STATS[2].label}
            </p>
          </div>

          <div className="h-px w-full bg-linear-to-r from-black/10 via-black/20 to-black/10 md:mb-8" />

          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr] md:gap-5">
            <p className="text-4xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[5rem]">
              {PLACEMENT_KEY_STATS[3].value}
            </p>
            <p className="text-lg font-medium text-black/75 md:pt-2 md:text-3xl">
              {PLACEMENT_KEY_STATS[3].label}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-black/65">
        Data represents cumulative placement achievements.
      </p>
    </div>
  );
}
