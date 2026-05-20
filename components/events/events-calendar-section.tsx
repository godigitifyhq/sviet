import Image from "next/image";

import type { EventCard } from "@/components/events/types";

type EventsCalendarSectionProps = {
  pastEvents: EventCard[];
};

function shouldBypassOptimization(src: string) {
  return src.includes(".ufs.sh/");
}

export function EventsCalendarSection({
  pastEvents,
}: EventsCalendarSectionProps) {
  const glimpseEvents = pastEvents.slice(0, 6);

  return (
    <section className="w-full bg-[#eef4ff] py-12 md:py-16">
      <div className="mx-auto w-full max-w-360 px-4 md:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1d4ed8]">
            Event Calendar
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f172a] md:text-5xl">
            SVGOI Event Highlights
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#334155] md:text-base">
            All events are completed. Revisit the flagship events that shaped
            campus life, with descriptions and key moments.
          </p>
        </div>

        <section className="rounded-2xl border border-[#dbe2f2] bg-white p-5 md:p-7">
          <h3 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">
            Recent Highlights
          </h3>
          <p className="mt-2 text-sm text-[#334155]">
            A dedicated look at all completed SVGOI events.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {pastEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-xl border border-[#e8edf7] bg-[#f8fbff]"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={480}
                  height={280}
                  unoptimized={shouldBypassOptimization(event.image)}
                  className="h-44 w-full object-cover object-[50%_30%]"
                />
                <div className="space-y-2 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#2563eb]">
                    {event.date}
                  </p>
                  <h4 className="text-lg font-semibold leading-snug text-[#111827]">
                    {event.title}
                  </h4>
                  <p className="text-sm text-[#334155]">{event.venue}</p>
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {event.overview}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#dbe2f2] bg-white p-5 md:p-7">
          <h3 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">
            Event Glimpses
          </h3>
          <p className="mt-2 text-sm text-[#334155]">
            Quick visual moments from our recent campus highlights.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glimpseEvents.map((event) => (
              <article
                key={`glimpse-${event.id}`}
                className="overflow-hidden rounded-xl border border-[#e8edf7] bg-[#f8fbff]"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={460}
                  height={280}
                  unoptimized={shouldBypassOptimization(event.image)}
                  className="h-40 w-full object-cover object-[50%_30%]"
                />
                <div className="p-3">
                  <h4 className="line-clamp-2 text-sm font-semibold text-[#0f172a]">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-sm uppercase tracking-wide text-[#2563eb]">
                    {event.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
