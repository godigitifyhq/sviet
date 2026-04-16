import Image from "next/image";

function MicrosoftMark() {
  return (
    <div className="grid h-12 w-12 grid-cols-2 grid-rows-2 overflow-hidden rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.18)] md:h-14 md:w-14">
      <div className="bg-[#f25022]" />
      <div className="bg-[#7fba00]" />
      <div className="bg-[#00a4ef]" />
      <div className="bg-[#ffb900]" />
    </div>
  );
}


export function PlacementSuccessBanner() {
  return (
    <section className="w-full bg-[#f8fafc] pt-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f7941d]">Placement Spotlight</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#0b3b8f] md:text-6xl">Proof of Placement Excellence</h2>
          <p className="mt-3 text-sm text-[#4b5563] md:text-base">Consistent outcomes built through training quality, industry alignment, and focused execution.</p>
        </div>

        <div className="mx-auto mt-10 max-w-7xl md:mt-24">
          <div className="relative overflow-visible rounded-3xl border border-[#dbe6ff] bg-linear-to-br from-[#0b3b8f] to-[#133f92] px-6 py-8 shadow-[0_20px_55px_rgba(11,59,143,0.22)] md:h-72 md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-18 -bottom-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1.2fr_0.95fr] md:gap-6">
              <div className="relative z-10 flex flex-col justify-center md:pr-2">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80 md:text-xs">Our Top Placements</p>
                <p className="mt-3 max-w-60 text-[2.1rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#fea700] md:max-w-65 md:text-[2.5rem]">
                  Avinash Verma
                  <br />
                  50 LPA
                </p>
              </div>

              <div className="relative flex h-56 items-end justify-center overflow-visible md:h-64">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#fea700]/20 blur-3xl md:h-28 md:w-52" />
                <Image
                  src="/assets/img/students/Placement-Mockup-1.png"
                  alt="Suraj Jagtap and Tanish Patel placed at Microsoft"
                  width={560}
                  height={560}
                  priority
                  className="absolute bottom-2! z-20 h-64 w-auto max-w-none object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.38)] md:-bottom-10 md:h-96"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
                <div>
                  <p className="text-sm font-semibold leading-tight text-white md:text-[1.05rem]">Top Placement Highlight</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80 md:text-sm">SVIET</p>
                </div>

                <p className="text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl">50 LPA</p>

                <MicrosoftMark />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
