"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

import { CURRICULUM_BY_YEAR } from "@/components/programs/data";

const YEAR_TABS = Object.keys(CURRICULUM_BY_YEAR) as Array<keyof typeof CURRICULUM_BY_YEAR>;

export function ProgramCurriculumSection() {
  const [activeYear, setActiveYear] = useState<keyof typeof CURRICULUM_BY_YEAR>("Year 1");

  return (
    <section className="mx-auto mt-30 w-full max-w-300 px-3 md:px-5">
      <p className="text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Curriculum</p>
      <h2 className="mt-2 text-4xl font-extrabold">What You&apos;ll Study</h2>
      <p className="mt-5 text-sm text-[#555]">160 credits across 8 semesters · Updated to industry standards</p>
      <div className="mt-12 inline-flex gap-1 rounded-xl border border-[#eaeaea] bg-[#f5f5f5] p-1">
        {YEAR_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveYear(tab)}
            className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${activeYear === tab ? "bg-[#f7941d] text-white" : "text-[#666]"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#fafafa] text-[#666]">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Course Name</th>
              <th className="px-4 py-3">Credits</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULUM_BY_YEAR[activeYear].map(([code, course, credits]) => (
              <tr key={code} className="border-t border-[#efefef]">
                <td className="px-4 py-3">
                  <span className="rounded bg-[#fff4ec] px-2 py-1 text-xs font-semibold text-[#f7941d]">{code}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#ccc]" />
                    <span>{course}</span>
                  </div>
                </td>
                <td className="px-4 py-4">{credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex items-center justify-between text-xs text-[#777]">
        <p>Showing {CURRICULUM_BY_YEAR[activeYear].length} courses for {activeYear}</p>
        <a href="#" className="font-medium text-[#f7941d]">Download full syllabus →</a>
      </div>
    </section>
  );
}
