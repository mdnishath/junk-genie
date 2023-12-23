import { Types } from 'mongoose';

export type TJob = {
  customer: Types.ObjectId; // Reference to the customer who posted the job
  postalCode: string;
  selectedService: string;
  jobType: string;
  items: Types.ObjectId[];
};
