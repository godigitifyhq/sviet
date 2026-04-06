import Image from "next/image";

function LaurelMark({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 160"
      aria-hidden="true"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <g fill="#2f266d">
        <ellipse cx="23" cy="14" rx="3.4" ry="9" transform="rotate(-28 23 14)" />
        <ellipse cx="18" cy="26" rx="3.4" ry="9" transform="rotate(-31 18 26)" />
        <ellipse cx="15" cy="39" rx="3.4" ry="9" transform="rotate(-34 15 39)" />
        <ellipse cx="14" cy="54" rx="3.4" ry="9" transform="rotate(-38 14 54)" />
        <ellipse cx="15" cy="69" rx="3.4" ry="9" transform="rotate(-43 15 69)" />
        <ellipse cx="18" cy="84" rx="3.4" ry="9" transform="rotate(-48 18 84)" />
        <ellipse cx="22" cy="99" rx="3.4" ry="9" transform="rotate(-54 22 99)" />
        <ellipse cx="27" cy="114" rx="3.4" ry="9" transform="rotate(-58 27 114)" />
        <ellipse cx="31" cy="128" rx="3.4" ry="9" transform="rotate(-64 31 128)" />
        <ellipse cx="34" cy="142" rx="3.4" ry="9" transform="rotate(-70 34 142)" />
      </g>
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <div className="grid h-14 w-14 grid-cols-2 grid-rows-2 overflow-hidden rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.18)] md:h-16 md:w-16">
      <div className="bg-[#f25022]" />
      <div className="bg-[#7fba00]" />
      <div className="bg-[#00a4ef]" />
      <div className="bg-[#ffb900]" />
    </div>
  );
}


export function PlacementSuccessBanner() {
  return (
    <section className="w-full bg-white pt-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 text-center md:gap-6">
          <LaurelMark className="h-24 w-7 shrink-0 md:h-32 md:w-8" />

          <div className="max-w-3xl">
            <p className="text-3xl font-normal leading-none text-[#0f0f0f] md:text-5xl">Their Success,</p>
            <h2 className="mt-2 bg-linear-to-r from-[#5249e4] via-[#8a4bd2] to-[#d06a98] bg-clip-text text-4xl font-extrabold leading-none text-transparent md:text-6xl">
              Our Greatest Pride
            </h2>
          </div>

          <LaurelMark className="h-24 w-7 shrink-0 md:h-32 md:w-8" flip />
        </div>

        <div className="mx-auto mt-10 max-w-7xl md:mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#25166e] px-6 py-8 shadow-[0_20px_60px_rgba(28,18,87,0.22)] md:h-72 md:px-10 md:py-10">
            <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1.2fr_0.95fr] md:gap-6">
              <div className="relative z-10 flex flex-col justify-center md:pr-2">
                <p className="text-base font-medium text-white md:text-xl">Our Top Placements</p>
                <p className="mt-3 max-w-60 text-[2.1rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#ffd54c] md:max-w-65 md:text-[3.3rem]">
                  A PU Star
                  <br />
                  Goes
                  <br />
                  Global
                </p>
              </div>

              <div className="relative flex h-56 items-end justify-center overflow-hidden md:h-64">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#7cf0d7]/15 blur-3xl md:h-28 md:w-52" />
                <Image
                  src="/assets/img/students/Placement-Mockup-1.png"
                  alt="Suraj Jagtap and Tanish Patel placed at Microsoft"
                  width={560}
                  height={560}
                  priority
                  className="relative z-10 h-56 w-auto max-w-none object-contain object-bottom md:h-64"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
                <div>
                  <p className="text-sm font-semibold leading-tight text-white md:text-[1.05rem]">Suraj Jagtap &amp; Tanish Patel</p>
                  <p className="mt-1 text-xs font-medium text-white/80 md:text-sm">Microsoft</p>
                </div>

                <p className="text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl">60 LPA</p>

                <MicrosoftMark />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}