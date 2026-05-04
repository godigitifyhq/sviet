import "server-only";

import eventsData from "@/data/data/event";
import { prisma } from "@/lib/prisma";
import { getTodayStart } from "@/lib/events/status";
import type { RegisterEventInput } from "@/lib/validation/events";
import { safeRead } from "@/lib/dal/safe-read";

export type CampusEventListItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date | null;
  category: string;
  isFeatured: boolean;
  createdAt: Date;
};

export type CampusEventsSectionData = {
  featuredEvent: CampusEventListItem | null;
  listEvents: CampusEventListItem[];
  listLabel: "Next big events" | "Recent events";
  hasUpcomingEvents: boolean;
};

type LegacyEvent = {
  id: number;
  name: string;
  headerImage?: string;
  overview?: string;
  date?: string;
};

function parseLegacyEventDate(dateText?: string) {
  if (!dateText) {
    return null;
  }

  const months =
    "january|february|march|april|may|june|july|august|september|october|november|december";

  const normalized = dateText
    .trim()
    .replace(/[–—]/g, "-")
    .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
    .replace(/(\d{1,2})\s*-\s*\d{1,2}(,?\s*\d{4})/g, "$1$2");

  const directTimestamp = Date.parse(normalized);

  if (!Number.isNaN(directTimestamp)) {
    return new Date(directTimestamp);
  }

  const monthYearMatch = normalized.match(new RegExp(`^(${months})\\s+(\\d{4})$`, "i"));

  if (monthYearMatch) {
    const fallbackTimestamp = Date.parse(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`);
    return Number.isNaN(fallbackTimestamp) ? null : new Date(fallbackTimestamp);
  }

  const dayMonthYearMatch = normalized.match(new RegExp(`^(\\d{1,2})\\s+(${months})\\s+(\\d{4})$`, "i"));

  if (dayMonthYearMatch) {
    const fallbackTimestamp = Date.parse(`${dayMonthYearMatch[2]} ${dayMonthYearMatch[1]}, ${dayMonthYearMatch[3]}`);
    return Number.isNaN(fallbackTimestamp) ? null : new Date(fallbackTimestamp);
  }

  return null;
}

function getLatestLegacyCompletedEvent(todayStart: Date): CampusEventListItem | null {
  const legacyEvents = (eventsData as LegacyEvent[])
    .map((event) => {
      const parsedDate = parseLegacyEventDate(event.date);

      if (!parsedDate || parsedDate >= todayStart) {
        return null;
      }

      return {
        id: `legacy-${event.id}`,
        title: event.name,
        description: event.overview ?? "",
        image: event.headerImage ?? "/assets/img/campus-life/r1c1.png",
        startDate: parsedDate,
        endDate: parsedDate,
        category: "campus",
        isFeatured: false,
        createdAt: parsedDate,
      } satisfies CampusEventListItem;
    })
    .filter((event): event is CampusEventListItem => event !== null)
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return legacyEvents[0] ?? null;
}

export async function listUpcomingEvents(limit?: number) {
  const todayStart = getTodayStart();

  return safeRead(
    () =>
      prisma.event.findMany({
        where: { startDate: { gte: todayStart } },
        orderBy: { startDate: "asc" },
        take: limit,
      }),
    [],
  );
}

export async function getCampusEventsSectionData(): Promise<CampusEventsSectionData> {
  const todayStart = getTodayStart();
  const latestLegacyCompletedEvent = getLatestLegacyCompletedEvent(todayStart);

  const [featuredActive, latestUpcoming, upcomingEvents, completedEvents] =
    await safeRead(
      () =>
        Promise.all([
          prisma.event.findFirst({
            where: {
              isFeatured: true,
              OR: [
                { startDate: { gte: todayStart } },
                {
                  startDate: { lt: todayStart },
                  OR: [{ endDate: null }, { endDate: { gte: todayStart } }],
                },
              ],
            },
            orderBy: { startDate: "desc" },
          }),
          prisma.event.findFirst({
            where: { startDate: { gte: todayStart } },
            orderBy: { startDate: "desc" },
          }),
          prisma.event.findMany({
            where: { startDate: { gte: todayStart } },
            orderBy: { startDate: "asc" },
            take: 5,
          }),
          prisma.event.findMany({
            where: { endDate: { lt: todayStart } },
            orderBy: { endDate: "desc" },
            take: 5,
          }),
        ]),
      [null, null, [], []] as const,
    );

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const fallbackCompletedEvents =
    completedEvents.length > 0
      ? completedEvents
      : latestLegacyCompletedEvent
        ? [latestLegacyCompletedEvent]
        : [];

  return {
    featuredEvent: featuredActive ?? latestUpcoming ?? latestLegacyCompletedEvent,
    listEvents: hasUpcomingEvents ? upcomingEvents : fallbackCompletedEvents,
    listLabel: hasUpcomingEvents ? "Next big events" : "Recent events",
    hasUpcomingEvents,
  };
}

export async function registerForEvent(data: RegisterEventInput) {
  return prisma.eventRegistration.create({
    data,
  });
}
