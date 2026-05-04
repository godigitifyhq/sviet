import { NextRequest } from "next/server";

import { assertHasRole } from "@/modules/auth/rbac";
import { prisma } from "@/lib/prisma";
import { withApiHandler } from "@/services/api-handler";
import { requireAuthUser } from "@/services/auth-context";
import { updateEventSchema } from "@/validators/admin-events";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["ADMIN", "SUPER_ADMIN"]);

    const { id } = await params;
    const payload = updateEventSchema.parse(await request.json());

    const data = {
      ...(payload.title !== undefined ? { title: payload.title } : {}),
      ...(payload.description !== undefined
        ? { description: payload.description }
        : {}),
      ...(payload.image !== undefined ? { image: payload.image } : {}),
      ...(payload.startDate !== undefined
        ? { startDate: new Date(payload.startDate) }
        : {}),
      ...(payload.endDate !== undefined
        ? { endDate: payload.endDate ? new Date(payload.endDate) : null }
        : {}),
      ...(payload.category !== undefined ? { category: payload.category } : {}),
      ...(payload.isFeatured !== undefined
        ? { isFeatured: payload.isFeatured }
        : {}),
    };

    return prisma.event.update({
      where: { id },
      data,
    });
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  return withApiHandler(async () => {
    const user = await requireAuthUser(request);
    assertHasRole(user.role, ["ADMIN", "SUPER_ADMIN"]);

    const { id } = await params;

    await prisma.event.delete({ where: { id } });

    return { deleted: true };
  });
}
