import { FaArrowRight } from "react-icons/fa";

export function CampusLifeApplyNowStrip() {
  return (
    <section className="mt-8 mb-8 mx-auto w-full max-w-[1280px] px-2 pt-5 md:px-5 md:pt-8">
      <div className="flex items-center justify-between rounded-[10px] bg-black px-4 py-3 text-white md:px-7 md:py-4">
        <p className="text-xs font-medium tracking-wide md:text-[22px] md:font-semibold">APPLY NOW FOR SVIETEEE - 2026</p>
        <button className="inline-flex items-center gap-2 rounded-none bg-transparent p-0 text-[10px] font-semibold md:text-[17px]">
          Apply Now
          <FaArrowRight className="text-[10px] md:text-[14px]" />
        </button>
      </div>
    </section>
  );
}
