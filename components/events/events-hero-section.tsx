import Image from "next/image";

import type { EventCard } from "@/components/events/types";

type EventsHeroSectionProps = {
  leadEvent: EventCard;
  totalEvents: number;
};

export function EventsHeroSection({ leadEvent, totalEvents }: EventsHeroSectionProps) {
  return (
    <section className="w-full bg-[#f5f7fb] pb-10 pt-6 md:pb-14 md:pt-8">
      <div className="mx-auto w-full max-w-360 px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={leadEvent.image}
            alt={leadEvent.title}
            width={1600}
            height={900}
            className="h-[360px] w-full object-cover md:h-[560px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#111827]/45 to-[#111827]/20" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-10">
            <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
              Events At SVIET
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Where Ideas, Culture, and Innovation Meet</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 md:text-lg">
              Discover conferences, festivals, hackathons, and student-led showcases that define the SVIET campus journey.
            </p>

            <div className="mt-6 grid gap-3 text-white/90 sm:grid-cols-3 md:mt-8 md:max-w-3xl">
              <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-3">
                <p className="text-xl font-bold md:text-3xl">{totalEvents}+</p>
                <p className="text-xs uppercase tracking-wide md:text-sm">Events Hosted</p>
              </div>
              <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-3">
                <p className="text-xl font-bold md:text-3xl">200+</p>
                <p className="text-xs uppercase tracking-wide md:text-sm">Industry Guests</p>
              </div>
              <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-3">
                <p className="text-xl font-bold md:text-3xl">10k+</p>
                <p className="text-xs uppercase tracking-wide md:text-sm">Student Participation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
