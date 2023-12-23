import { z } from 'zod';

export const createItemValidationSchema = z.object({
  name: z.string().min(3).max(50),
  price: z.number().positive(),
});

export const updateItemValidationSchema = createItemValidationSchema.partial();

export const itemValidationSchema = {
  createItemValidationSchema,
  updateItemValidationSchema,
};
