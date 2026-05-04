-- Refactor Event model for dynamic campus events and admin control.
DROP INDEX IF EXISTS "Event_startsAt_idx";

ALTER TABLE "Event"
  DROP COLUMN IF EXISTS "slug",
  DROP COLUMN IF EXISTS "summary",
  DROP COLUMN IF EXISTS "venue",
  DROP COLUMN IF EXISTS "startsAt",
  DROP COLUMN IF EXISTS "endsAt",
  DROP COLUMN IF EXISTS "capacity",
  DROP COLUMN IF EXISTS "isPublished",
  ADD COLUMN "description" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "image" TEXT NOT NULL DEFAULT '',
  ADD COLUMN "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN "endDate" TIMESTAMP(3),
  ADD COLUMN "category" TEXT NOT NULL DEFAULT 'general',
  ADD COLUMN "isFeatured" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS "Event_startDate_idx" ON "Event"("startDate");
CREATE INDEX IF NOT EXISTS "Event_endDate_idx" ON "Event"("endDate");
CREATE INDEX IF NOT EXISTS "Event_category_idx" ON "Event"("category");
CREATE INDEX IF NOT EXISTS "Event_isFeatured_startDate_idx" ON "Event"("isFeatured", "startDate");
