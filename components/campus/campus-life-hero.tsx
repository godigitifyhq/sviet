import { FaArrowRight } from "react-icons/fa";

export function CampusLifeHeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-2 md:px-5 md:pt-3">
      <div className="relative h-[310px] overflow-hidden md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80"
          alt="Campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />

        <div className="absolute left-2 top-5 text-white md:left-6 md:top-8">
          <h1 className="text-[62px] font-extrabold leading-[0.9] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ffffffc3] to-[#99999900]  md:text-[165px] md:tracking-[2px]">
            CAMPUS LIFE
          </h1>
          <h2 className="mt-24 text-[49px] font-extrabold leading-[0.82] md:text-[66px]">
            PIONEERING
            <br />
            <span className="inline-block text-[#f7941d] mt-3">POSSIBILITIES</span>
          </h2>
          <p className="mt-2 text-xl font-semibold md:text-[30px]">Research & Innovation</p>
        </div>

        <div className="absolute bottom-4 right-2 max-w-[280px] text-white md:bottom-28 md:right-6 md:max-w-[420px]">
          <p className="text-sm leading-tight md:text-[32px] md:leading-[1.12]">
            Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
          </p>
          <button className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#f7941d] px-4 py-2 text-xs font-semibold text-white md:mt-5 md:px-5 md:py-3 md:text-[18px]">
            Video Tour
            <FaArrowRight className="text-[11px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
