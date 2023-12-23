import { z } from 'zod';

export const nameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});

export const createUserValidationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string(),
  name: nameValidationSchema,
  gender: z.enum(['male', 'female']),
  address: addressValidationSchema,
  profileImage: z.string().url(),
});

export const updateUserValidationSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  phone: z.string().optional(),
  name: nameValidationSchema.optional(),
  gender: z.enum(['male', 'female']).optional(),
  address: addressValidationSchema.optional(),
  profileImage: z.string().url().optional(),
});
