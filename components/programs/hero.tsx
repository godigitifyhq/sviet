import Image from "next/image";

import { PROGRAM_META_CHIPS } from "@/components/programs/data";

export function ProgramHeroSection() {
  return (
    <section className="mx-auto mt-5 w-full max-w-300 px-3 md:px-5">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="text-[11px] text-[#f7941d]">Recommended for students interested in Engineering / Tech Careers</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f7941d]">
            PROGRAM OVERVIEW
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-tight">B.Tech Computer Science Engineering</h1>
          <p className="mt-3 max-w-3xl text-[#4b4b4b]">
            A future-ready undergraduate program designed to build strong foundations in computing, software engineering, and emerging technologies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {PROGRAM_META_CHIPS.map((chip) => (
              <span key={chip} className="rounded-full border border-[#ddd] bg-white px-3 py-1">
                {chip}
              </span>
            ))}
          </div>
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
            alt="Program"
            width={1400}
            height={560}
            className="mt-4 h-52.5 w-full rounded-xl object-cover"
          />
        </div>

        <aside className="space-y-3 rounded-xl border border-[#e6e6e6] bg-white p-4">
          <p className="text-sm text-[#555]">Applications</p>
          <p className="text-4xl font-extrabold">
            120 <span className="text-sm font-semibold text-[#f7941d]">Filling Fast</span>
          </p>
          <button className="w-full rounded bg-[#f7941d] px-4 py-2.5 font-semibold text-white">Apply Now</button>
          <button className="w-full rounded border border-[#f7941d] px-4 py-2.5 font-semibold text-[#f7941d]">Download Brochure</button>
          <button className="w-full rounded border border-[#e6e6e6] px-4 py-2.5 font-semibold text-[#555]">Enquire</button>
          <div className="space-y-1.5 border-t border-[#eaeaea] pt-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#888]">Duration</span>
              <span className="font-medium text-[#222]">4 Years (8 Semesters)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#888]">Fees</span>
              <span className="font-medium text-[#222]">₹80,000 / Year</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#888]">Affiliation</span>
              <span className="font-medium text-[#222]">PTU, Punjab</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#888]">Approval</span>
              <span className="font-medium text-[#222]">AICTE Approved</span>
            </div>
          </div>
          <div className="rounded bg-[#fff6ee] p-3 text-xs text-[#8d5522]">75% scholarship seats available for early applicants.</div>
        </aside>
      </div>
    </section>
  );
}
