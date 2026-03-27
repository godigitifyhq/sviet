import { BookOpen, Coffee, FlaskConical, Monitor, Wifi } from "lucide-react";
import Image from "next/image";

import { FACILITY_DETAILS, FACILITY_EXTRAS } from "@/components/programs/data";

const FACILITY_ICONS = [Monitor, BookOpen, Monitor, FlaskConical] as const;

export function ProgramFacilitiesSection() {
  return (
    <section className="mx-auto mt-30 mb-15 w-full max-w-300 px-3 md:px-5">
      <p className="text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Infrastructure</p>
      <h2 className="mt-2 text-4xl font-extrabold">World-Class Campus Facilities</h2>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {FACILITY_DETAILS.map(([facility, description], index) => {
          const Icon = FACILITY_ICONS[index];

          return (
          <article key={facility} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-white">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
              alt={facility}
              width={1000}
              height={520}
              className="h-32.5 w-full object-cover"
            />
            <div className="px-3 py-6">
              <div className="mb-1.5 flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#f7941d]" />
                <p className="text-sm font-semibold">{facility}</p>
              </div>
              <p className="text-xs text-[#666]">{description}</p>
            </div>
          </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {FACILITY_EXTRAS.map((item, index) => (
          <div key={item} className="inline-flex items-center gap-2 rounded-full border border-[#eaeaea] bg-[#fafafa] px-3 py-1.5 text-xs text-[#666]">
            {index === 0 && <Wifi className="h-3.5 w-3.5 text-[#f7941d]" />}
            {index === 1 && <Coffee className="h-3.5 w-3.5 text-[#f7941d]" />}
            {index === 2 && <BookOpen className="h-3.5 w-3.5 text-[#f7941d]" />}
            {index === 3 && <Monitor className="h-3.5 w-3.5 text-[#f7941d]" />}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
