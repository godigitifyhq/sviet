import { z } from "zod";

const dateString = z
  .string()
  .trim()
  .refine(
    (value) => !Number.isNaN(new Date(value).getTime()),
    "Invalid date value.",
  );

const baseEventSchema = z
  .object({
    title: z.string().trim().min(3).max(180),
    description: z.string().trim().min(10).max(2000),
    image: z.string().trim().min(1).max(2000000),
    startDate: dateString,
    endDate: dateString.nullable().optional(),
    category: z.string().trim().min(2).max(80),
    isFeatured: z.boolean().optional().default(false),
  })
  .refine(
    (data) => {
      if (!data.endDate) {
        return true;
      }

      return (
        new Date(data.endDate).getTime() >= new Date(data.startDate).getTime()
      );
    },
    {
      path: ["endDate"],
      message: "End date must be greater than or equal to start date.",
    },
  );

export const createEventSchema = baseEventSchema;

export const updateEventSchema = baseEventSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    "At least one field is required to update an event.",
  );

export const listEventsQuerySchema = z.object({
  take: z.coerce.number().int().min(1).max(100).default(50),
  category: z.string().trim().min(1).max(80).optional(),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;
