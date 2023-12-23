import { z } from 'zod';
import { Types } from 'mongoose';

export const createJobValidationSchema = z.object({
  customer: z.string().refine((value) => Types.ObjectId.isValid(value), {
    message: 'Invalid ObjectId for "customer"',
  }),
  postalCode: z.string(),
  selectedService: z.string(),
  jobType: z.string(),
  items: z.array(
    z.string().refine((value) => Types.ObjectId.isValid(value), {
      message: 'Invalid ObjectId for "items"',
    }),
  ),
});
