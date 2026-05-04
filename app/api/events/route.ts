import { NextRequest } from "next/server";

import { assertHasRole } from "@/modules/auth/rbac";
import { prisma } from "@/lib/prisma";
import { getEventStatus } from "@/lib/events/status";
import { withApiHandler } from "@/services/api-handler";
import { requireAuthUser } from "@/services/auth-context";
import {
  createEventSchema,
  listEventsQuerySchema,
} from "@/validators/admin-events";

export async function GET(request: NextRequest) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["ADMIN", "SUPER_ADMIN"]);

    const query = Object.fromEntries(request.nextUrl.searchParams.entries());
    const { take, category } = listEventsQuerySchema.parse(query);

    const events = await prisma.event.findMany({
      where: category ? { category } : undefined,
      orderBy: [{ startDate: "desc" }, { createdAt: "desc" }],
      take,
    });

    return events.map((event) => ({
      ...event,
      status: getEventStatus(event),
    }));
  });
}

export async function POST(request: NextRequest) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["ADMIN", "SUPER_ADMIN"]);

    const payload = createEventSchema.parse(await request.json());

    return prisma.event.create({
      data: {
        title: payload.title,
        description: payload.description,
        image: payload.image,
        startDate: new Date(payload.startDate),
        endDate: payload.endDate ? new Date(payload.endDate) : null,
        category: payload.category,
        isFeatured: payload.isFeatured ?? false,
      },
    });
  });
}
