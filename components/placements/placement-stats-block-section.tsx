export function PlacementStatsBlockSection() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl bg-linear-to-br from-[#ffffff] to-[#f8f9fb] px-5 py-10 shadow-[0_8px_24px_rgba(11,59,143,0.08)] md:mt-14 md:rounded-[30px] md:px-10 md:py-16">
      <div className="grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div className="flex flex-col items-center justify-center text-center md:border-r-2 md:border-black/15 md:pr-10">
          <p className="text-5xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[6.5rem]">
            60 Lacs
          </p>
          <p className="mt-4 text-lg font-medium text-black/75 md:mt-6 md:text-3xl">Highest package offered</p>
        </div>

        <div className="grid gap-6 md:gap-0">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr] md:gap-5 md:pb-8">
            <p className="text-4xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[5rem]">
              20,000+
            </p>
            <p className="text-lg font-medium text-black/75 md:pt-2 md:text-3xl">Placed Students</p>
          </div>

          <div className="h-px w-full bg-linear-to-r from-black/10 via-black/20 to-black/10 md:mb-8" />

          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr] md:gap-5">
            <p className="text-4xl font-extrabold leading-none tracking-[-0.05em] text-[#0b3b8f] md:text-[5rem]">
              2,200+
            </p>
            <p className="text-lg font-medium text-black/75 md:pt-2 md:text-3xl">Recruiters</p>
          </div>
        </div>
      </div>
    </div>
  );
}
