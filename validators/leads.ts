import { z } from "zod";

export const createLeadSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  email: z.email().transform((value) => value.toLowerCase()),
  phone: z.string().trim().min(7).max(20).optional(),
  source: z.enum(["WEBSITE", "PHONE", "REFERRAL", "EVENT", "SOCIAL", "WALK_IN"]),
  intendedProgramId: z.uuid().optional(),
  notes: z.string().trim().max(1000).optional(),
  nextFollowUpAt: z.iso.datetime().optional(),
});

export const updateLeadSchema = createLeadSchema.partial().extend({
  status: z
    .enum(["NEW", "ASSIGNED", "CONTACTED", "NURTURING", "QUALIFIED", "CONVERTED", "DISQUALIFIED", "LOST"])
    .optional(),
});

export const assignLeadSchema = z.object({
  counselorId: z.uuid(),
});

export const leadQuerySchema = z.object({
  status: z
    .enum(["NEW", "ASSIGNED", "CONTACTED", "NURTURING", "QUALIFIED", "CONVERTED", "DISQUALIFIED", "LOST"])
    .optional(),
  ownerCounselorId: z.uuid().optional(),
  q: z.string().trim().min(1).max(120).optional(),
  take: z.coerce.number().int().min(1).max(100).default(20),
  skip: z.coerce.number().int().min(0).default(0),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
export type UpdateLeadInput = z.infer<typeof updateLeadSchema>;
