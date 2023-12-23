import { z } from 'zod';

// Define Zod schemas for nested objects
const nameValidationSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
});

const addressValidationSchema = z.object({
  street: z.string().min(3, { message: 'Street must be at least 3 characters' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters' }),
  state: z.string().min(2, { message: 'State must be at least 2 characters' }),
  zip: z.string().min(5, { message: 'Zip code must be at least 5 characters' }),
  country: z.string().min(2, { message: 'Country must be at least 2 characters' }),
});

// Define the main Zod schema for the Admin model
export const createCustomerValidationSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 5 characters' }),
  email: z.string().email(),
  phone: z.string().length(10, { message: 'Phone number must be 10 digits' }), // Adjust length as needed
  name: nameValidationSchema,
  gender: z.enum(['male', 'female']),
  address: addressValidationSchema,
  profileImage: z.string().url('Invalid profile image URL'),
  jobs: z.array(z.string()), // Assuming Job IDs are strings
});

export const updateCustomerValidationSchema = createCustomerValidationSchema.partial();
