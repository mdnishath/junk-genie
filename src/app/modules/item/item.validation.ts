// item.validation.ts
import { z } from 'zod';

export const createItemValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(50),
    price: z.number().positive(),
  }),
});

export const updateItemValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(50).optional(),
    price: z.number().positive().optional(),
  }),
});

export const itemValidationSchema = {
  createItemValidationSchema,
  updateItemValidationSchema,
};
