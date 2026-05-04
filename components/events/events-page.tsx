import { EventsCalendarSection } from "@/components/events/events-calendar-section";
import {
  COMPLETED_EVENTS,
  FEATURED_EVENTS,
  EVENT_SPEAKERS,
} from "@/components/events/event-data";
import { EventsFeaturedSection } from "@/components/events/events-featured-section";
import { EventsHeroSection } from "@/components/events/events-hero-section";
import { EventsSpeakersSection } from "@/components/events/events-speakers-section";
import { DistinguishedLeadersSection } from "@/components/home/leaders";

export function EventsPage() {
  return (
    <div className="bg-white text-[#111827]">
      <EventsHeroSection />
      <EventsFeaturedSection featuredEvents={FEATURED_EVENTS} />
      <EventsCalendarSection pastEvents={COMPLETED_EVENTS} />
      <DistinguishedLeadersSection />
      <EventsSpeakersSection speakers={EVENT_SPEAKERS} />
    </div>
  );
}
