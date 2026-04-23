import { EventsCalendarSection } from "@/components/events/events-calendar-section";
import {
  FEATURED_EVENTS,
  EVENT_CARDS,
  EVENT_SPEAKERS,
  PAST_EVENTS,
  UPCOMING_EVENTS,
} from "@/components/events/event-data";
import { EventsFeaturedSection } from "@/components/events/events-featured-section";
import { EventsHeroSection } from "@/components/events/events-hero-section";
import { EventsSpeakersSection } from "@/components/events/events-speakers-section";

export function EventsPage() {
  return (
    <div className="bg-white text-[#111827]">
      <EventsHeroSection />
      <EventsFeaturedSection featuredEvents={FEATURED_EVENTS} />
      <EventsCalendarSection
        upcomingEvents={UPCOMING_EVENTS}
        pastEvents={PAST_EVENTS}
      />
      <EventsSpeakersSection speakers={EVENT_SPEAKERS} />
    </div>
  );
}
