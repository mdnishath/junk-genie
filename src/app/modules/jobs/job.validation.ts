// job.validation.ts
import { z } from 'zod';
const itemValidationSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export const createJobValidationSchema = z.object({
  body: z.object({
    postalCode: z.string(),
    selectedService: z.string(),
    jobType: z.string(),
    items: z.array(itemValidationSchema),
  }),
});

export const updateJobValidationSchema = z.object({
  body: z.object({
    postalCode: z.string().optional(),
    selectedService: z.string().optional(),
    jobType: z.string().optional(),
    items: z.array(itemValidationSchema).optional(),
  }),
});

export const JobValidations = {
  itemValidationSchema,
  createJobValidationSchema,
  updateJobValidationSchema,
};
