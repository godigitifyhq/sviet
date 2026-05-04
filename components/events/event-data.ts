import eventsData from "@/data/data/event";

import type {
  EventCard,
  EventRecord,
  EventSpeaker,
} from "@/components/events/types";

const FALLBACK_IMAGES = [
  "/assets/img/campus-life/r2c1.png",
  "/assets/img/campus-life/r2c2.png",
  "/assets/img/campus-life/r2c3.png",
  "/assets/img/campus-life/r3c1.png",
  "/assets/img/campus-life/r3c2.png",
] as const;

const FALLBACK_OVERVIEW =
  "Join us for a high-impact campus event featuring learning, networking, performances, and hands-on experiences.";

function normalizeText(value: string | undefined, fallback: string) {
  const text = value?.trim();
  return text && text.length > 0 ? text : fallback;
}

function toCard(event: EventRecord, index: number): EventCard {
  return {
    id: event.id,
    title: normalizeText(event.name, `Event ${event.id}`),
    image: normalizeText(
      event.headerImage,
      FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
    ),
    date: normalizeText(event.date, "Date to be announced"),
    venue: normalizeText(event.venue, "SVIET Campus"),
    overview: normalizeText(event.overview, FALLBACK_OVERVIEW),
  };
}

export const EVENT_CARDS: EventCard[] = (eventsData as EventRecord[]).map(
  toCard,
);

export const FEATURED_EVENTS: EventCard[] = EVENT_CARDS.slice(0, 3);

export const UPCOMING_EVENTS: EventCard[] = EVENT_CARDS.slice(0, 6);

export const PAST_EVENTS: EventCard[] = EVENT_CARDS.slice(6, 12);

export const COMPLETED_EVENTS: EventCard[] = EVENT_CARDS;

export const EVENT_SPEAKERS: EventSpeaker[] = (eventsData as EventRecord[])
  .flatMap((event) => event.speakers ?? [])
  .filter((speaker) => Boolean(speaker?.name))
  .slice(0, 8);
