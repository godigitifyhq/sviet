"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const APPLY_STEPS = [
  {
    title: "Visit our online portal",
    detail:
      "Open the admissions portal, pick your program, and hit start. Your journey begins in minutes.",
  },
  {
    title: "Fill in your primary information",
    detail:
      "Add your key personal and academic details carefully. Clean data means a faster process.",
  },
  {
    title: "Choosing a program",
    detail:
      "Compare options, align with your goals, and choose the program that fits your future.",
  },
  {
    title: "Registration for the selected program",
    detail:
      "Confirm your selected program, review the summary, and lock your registration confidently.",
  },
  {
    title: "Hostel selection",
    detail:
      "Need accommodation? Select your preferred hostel option during admission itself.",
  },
] as const;

export function AdmissionsHowToApplySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f5f7fb] py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1a1a21] md:text-5xl">
            How to <span className="text-[#f7941d]">apply</span> to SVIET
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-[#4f4f5f] md:text-base">
            No confusion. No guesswork. Just a simple step-by-step admission flow.
          </p>

          <div className="mt-7 divide-y divide-[#d8d7e3] border-y border-[#d8d7e3]">
            {APPLY_STEPS.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <article key={step.title} className="py-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className="flex w-full items-start justify-between gap-3 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#fed7aa] text-xs font-semibold text-[#f7941d]">
                        {index + 1}
                      </span>
                      <p className="text-base font-semibold text-[#16161d] md:text-lg">{step.title}</p>
                    </div>
                    <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-[#64637c] transition ${isActive ? "rotate-180" : ""}`} />
                  </button>

                  {isActive ? <p className="ml-9 mt-2 max-w-2xl text-sm leading-relaxed text-[#4f4f5f]">{step.detail}</p> : null}
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative flex items-center justify-center rounded-2xl bg-[#2563EB] p-6 md:p-8">
          <div className="w-full max-w-sm rounded-xl bg-white p-4 shadow-xl">
            <p className="rounded-full bg-[#eaf1ff] px-3 py-2 text-xs font-semibold text-[#2563EB]">admissions.sviet.ac.in</p>
            <p className="mt-2 text-sm font-semibold text-[#1a1a22]">SVIET admissions portal</p>
            <div className="relative mt-3 overflow-hidden rounded-lg border border-[#ecebf5]">
              <Image
                src="/assets/img/college/main_gate.png"
                alt="SVIET admissions portal preview"
                width={420}
                height={240}
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="mt-3 h-3 w-3/4 rounded-full bg-[#ecebf5]" />
          </div>
        </div>
      </div>
    </section>
  );
}
