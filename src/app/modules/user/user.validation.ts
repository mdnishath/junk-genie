import { z } from 'zod';

export const createUserValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const updateUserValidationSchema = createUserValidationSchema.partial();
