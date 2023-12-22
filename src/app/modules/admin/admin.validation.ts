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

export const createAdminValidationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  phone: z.string(),
  name: nameValidationSchema,
  gender: z.enum(['male', 'female']),
  address: addressValidationSchema,
  profileImage: z.string().url(),
});
