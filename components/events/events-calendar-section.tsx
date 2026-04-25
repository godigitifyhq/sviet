import Image from "next/image";

import type { EventCard } from "@/components/events/types";

type EventsCalendarSectionProps = {
  upcomingEvents: EventCard[];
  pastEvents: EventCard[];
};

function shouldBypassOptimization(src: string) {
  return src.includes(".ufs.sh/");
}

function EventList({ title, items }: { title: string; items: EventCard[] }) {
  return (
    <section className="rounded-2xl border border-[#dbe2f2] bg-white p-5 md:p-7">
      <h3 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">
        {title}
      </h3>
      <div className="mt-5 space-y-4">
        {items.map((event) => (
          <article
            key={event.id}
            className="grid gap-4 rounded-xl border border-[#e8edf7] bg-[#f8fbff] p-4 sm:grid-cols-[160px_1fr]"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={220}
              unoptimized={shouldBypassOptimization(event.image)}
              className="h-28 w-full rounded-lg object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-[#111827]">
                {event.title}
              </h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2563eb]">
                {event.date}
              </p>
              <p className="mt-1 text-sm text-[#334155]">{event.venue}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EventsCalendarSection({
  upcomingEvents,
  pastEvents,
}: EventsCalendarSectionProps) {
  return (
    <section className="w-full bg-[#eef4ff] py-12 md:py-16">
      <div className="mx-auto w-full max-w-360 px-4 md:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1d4ed8]">
            Event Calendar
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0f172a] md:text-5xl">
            Plan Your SVIET Event Journey
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#334155] md:text-base">
            Track what is coming next and revisit the flagship events that
            shaped campus life this year.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <EventList title="Upcoming Events" items={upcomingEvents} />
          <EventList title="Recent Highlights" items={pastEvents} />
        </div>
      </div>
    </section>
  );
}
