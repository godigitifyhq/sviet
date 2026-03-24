"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleApplyPanel = () => {
    setIsApplyOpen((prev) => !prev);
  };

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!isApplyOpen || !panelRef.current) {
        return;
      }

      if (!panelRef.current.contains(event.target as Node)) {
        setIsApplyOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsApplyOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isApplyOpen]);

  return (
    <>
      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-140 overflow-hidden rounded-2xl md:h-150">
            <Image
              src="/assets/img/college/main_gate.png"
              alt="SVIET campus main gate"
              fill
              className="absolute inset-0 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/90 to-black/90" />

            <div className="relative grid h-full items-center gap-6 px-5 py-8 text-white md:grid-cols-[0.45fr_0.55fr] md:px-12">
              <div className="relative mx-auto hidden h-full w-full max-w-90 items-end justify-center md:flex">
                <Image
                  src="/assets/img/students/moon_mandal.png"
                  alt="Moon Mandal"
                  width={360}
                  height={470}
                  className="h-117.5 w-80 object-cover"
                />
                <div className="absolute bottom-14 left-3 flex items-center gap-3 rounded-xl bg-white px-3 py-2 text-foreground shadow-md">
                  <Image
                    src="/assets/img/companies/jio_digital.png"
                    alt="Jio Digital logo"
                    width={82}
                    height={32}
                    className="h-7 w-auto"
                  />
                  <div>
                    <p className="text-sm font-bold">Moon Mandal</p>
                    <p className="text-xs font-medium text-[#555555]">Placed - Product Analyst</p>
                  </div>
                </div>
              </div>

              <div className="space-y-7 text-center md:text-left">
              <h1 className="mx-auto max-w-xl text-4xl font-bold leading-tight md:mx-0 md:text-5xl">
                Launch Your Career With Industry-Ready Degrees
              </h1>

              <div className="mx-auto grid max-w-md grid-cols-3 gap-4 md:mx-0 md:gap-6">
                <div>
                  <p className="text-3xl font-bold md:text-4xl">3,000+</p>
                  <p className="mt-1 text-xs font-medium text-white/85 md:text-sm">Offers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold md:text-4xl">350+</p>
                  <p className="mt-1 text-xs font-medium text-white/85 md:text-sm">Companies</p>
                </div>
                <div>
                  <p className="text-3xl font-bold md:text-4xl">12,000+</p>
                  <p className="mt-1 text-xs font-medium text-white/85 md:text-sm">Students</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={toggleApplyPanel}
                  className="w-full rounded-full bg-[#F97316] px-6 py-3 text-sm font-bold transition duration-200 hover:scale-105 sm:w-auto"
                >
                  Apply Now
                </button>
                <button className="w-full rounded-full border border-white/70 px-6 py-3 text-sm font-bold transition duration-200 hover:scale-105 sm:w-auto">
                  Talk to Counselor
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
        <button
          type="button"
          onClick={toggleApplyPanel}
          className="rounded-l-xl bg-[#F97316] px-4 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:scale-105"
          aria-label={isApplyOpen ? "Close apply form" : "Open apply form"}
          aria-controls="apply-now-panel"
        >
          {isApplyOpen ? "Close Form" : "Apply Now"}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transition duration-200 ${isApplyOpen ? "pointer-events-auto bg-black/35" : "pointer-events-none bg-black/0"}`}
      >
        <div
          id="apply-now-panel"
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-[92%] max-w-md bg-white p-6 shadow-2xl transition-transform duration-300 md:w-105 ${isApplyOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-[#e8e8e8] pb-3">
            <h3 className="text-xl font-bold text-foreground">Apply Now</h3>
            <button type="button" onClick={toggleApplyPanel} className="text-sm font-semibold text-[#666666]">
              Close
            </button>
          </div>

          <form className="mt-5 grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            />
            <select
              aria-label="Choose Program"
              className="rounded-xl border border-[#e4e4e4] bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
            >
              <option>Choose Program</option>
              <option>B.Tech CSE</option>
              <option>MBA</option>
              <option>BCA</option>
            </select>
            <button
              type="button"
              className="rounded-full bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
