import "server-only";

import { prisma } from "@/lib/prisma";
import type { RegisterEventInput } from "@/lib/validation/events";
import { safeRead } from "@/lib/dal/safe-read";

export async function listUpcomingEvents(limit?: number) {
  return safeRead(
    () =>
      prisma.event.findMany({
        where: { isPublished: true, startsAt: { gte: new Date() } },
        orderBy: { startsAt: "asc" },
        take: limit,
      }),
    [],
  );
}

export async function registerForEvent(data: RegisterEventInput) {
  return prisma.eventRegistration.create({
    data,
  });
}
