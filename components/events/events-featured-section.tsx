import Image from "next/image";

import type { EventCard } from "@/components/events/types";

type EventsFeaturedSectionProps = {
  featuredEvents: EventCard[];
};

function shouldBypassOptimization(src: string) {
  return src.includes(".ufs.sh/");
}

function summary(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}...`;
}

export function EventsFeaturedSection({
  featuredEvents,
}: EventsFeaturedSectionProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-360 px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1d4ed8]">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#111827] md:text-5xl">
              Signature Campus Events
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <article
              key={event.id}
              className="overflow-hidden rounded-2xl border border-[#e7e9ef] bg-[#fbfcff]"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={700}
                height={420}
                unoptimized={shouldBypassOptimization(event.image)}
                className="h-52 w-full object-cover object-[50%_20%]"
              />
              <div className="space-y-3 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f97316]">
                  {event.date}
                </p>
                <h3 className="text-xl font-semibold leading-tight text-[#0f172a]">
                  {event.title}
                </h3>
                <p className="text-sm text-[#475569]">{event.venue}</p>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {summary(event.overview, 145)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
