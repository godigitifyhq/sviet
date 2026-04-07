import { EventsCalendarSection } from "@/components/events/events-calendar-section";
import { FEATURED_EVENTS, EVENT_CARDS, EVENT_SPEAKERS, PAST_EVENTS, UPCOMING_EVENTS } from "@/components/events/event-data";
import { EventsFeaturedSection } from "@/components/events/events-featured-section";
import { EventsHeroSection } from "@/components/events/events-hero-section";
import { EventsSpeakersSection } from "@/components/events/events-speakers-section";

export function EventsPage() {
  const leadEvent = FEATURED_EVENTS[0] ?? EVENT_CARDS[0];

  if (!leadEvent) {
    return (
      <section className="mx-auto w-full max-w-360 px-4 py-16 md:px-6">
        <h1 className="text-3xl font-semibold text-[#111827] md:text-5xl">Events</h1>
        <p className="mt-4 text-[#475569]">Events will be updated soon.</p>
      </section>
    );
  }

  return (
    <div className="bg-white text-[#111827]">
      <EventsHeroSection leadEvent={leadEvent} totalEvents={EVENT_CARDS.length} />
      <EventsFeaturedSection featuredEvents={FEATURED_EVENTS} />
      <EventsCalendarSection upcomingEvents={UPCOMING_EVENTS} pastEvents={PAST_EVENTS} />
      <EventsSpeakersSection speakers={EVENT_SPEAKERS} />
    </div>
  );
}
