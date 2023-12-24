import { z } from 'zod';
import { JOB_STATUS } from './job.constant';

export const createJobValidationSchema = z.object({
  customer: z.string(), // Assuming customer is a string ID
  loader: z.string().optional(),
  date: z.string(),
  time: z.string(),
  items: z.array(z.string()), // Assuming items are an array of string IDs
  status: z.enum(Object.values(JOB_STATUS) as [string, ...string[]]),
});
