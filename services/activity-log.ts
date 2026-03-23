import "server-only";

import { prisma } from "@/lib/db";
import { log } from "@/services/logger";

type RecordActivityInput = {
  actorUserId?: string;
  actorType: "USER" | "SYSTEM";
  entityType: "USER" | "LEAD" | "APPLICATION" | "DOCUMENT";
  entityId: string;
  action: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
};

export async function recordActivity(input: RecordActivityInput) {
  try {
    await prisma.activityLog.create({
      data: {
        actorUserId: input.actorUserId,
        actorType: input.actorType,
        entityType: input.entityType,
        entityId: input.entityId,
        action: input.action,
        metadata: input.metadata,
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      },
    });
  } catch (error) {
    log("error", {
      message: "Failed to persist activity log entry.",
      context: {
        action: input.action,
        entityType: input.entityType,
        entityId: input.entityId,
        error: error instanceof Error ? error.message : "unknown",
      },
    });
  }
}
