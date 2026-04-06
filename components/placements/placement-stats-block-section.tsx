export function PlacementStatsBlockSection() {
  return (
    <div className="mt-14 overflow-hidden rounded-[28px] bg-[#f4c63f] px-6 py-14 text-[#2f266d] shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:mt-18 md:rounded-[34px] md:px-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div className="flex flex-col items-center justify-center text-center md:border-r-2 md:border-[#8f7421]/45 md:pr-12">
          <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-6xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[7.25rem]">
            60 Lacs
          </p>
          <p className="mt-5 text-2xl font-medium text-black md:mt-8 md:text-4xl">Highest package offered</p>
        </div>

        <div className="grid gap-8 md:gap-0">
          <div className="grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-6 md:pb-10">
            <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-5xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[5.75rem]">
              20,000+
            </p>
            <p className="text-2xl font-medium text-black md:pt-3 md:text-4xl">Placed Students</p>
          </div>

          <div className="h-px w-full bg-[#8f7421]/50 md:mb-10" />

          <div className="grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-6">
            <p className="bg-linear-to-r from-[#5a45ea] via-[#7f43c8] to-[#b24587] bg-clip-text text-5xl font-extrabold leading-none tracking-[-0.05em] text-transparent md:text-[5.75rem]">
              2,200+
            </p>
            <p className="text-2xl font-medium text-black md:pt-3 md:text-4xl">Recruiters</p>
          </div>
        </div>
      </div>
    </div>
  );
}
