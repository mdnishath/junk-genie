import { z } from 'zod';

const nameValedationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressValedationSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});

const createCustomerValedationSchemaSchema = z.object({
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  name: nameValedationSchema,
  gender: z.enum(['male', 'female']),
  address: addressValedationSchema,
  jobs: z.array(z.string()).optional(), // Assuming 'Job' is the name of the Job model
  profileImage: z.string(),
});

const updateCustomerValedationSchemaSchema = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  name: nameValedationSchema.optional(),
  gender: z.enum(['male', 'female']).optional(),
  address: addressValedationSchema,
  jobs: z.array(z.string()).optional(), // Assuming 'Job' is the name of the Job model
  profileImage: z.string().optional(),
});

export const loaderValedationSchema = {
  createCustomerValedationSchemaSchema,
  updateCustomerValedationSchemaSchema,
};
