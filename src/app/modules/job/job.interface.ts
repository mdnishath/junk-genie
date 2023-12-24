import { Types } from 'mongoose';
import { JOB_STATUS } from './job.constant';

export type TJOB_STATUS = keyof typeof JOB_STATUS;

export type TJob = {
  customer: Types.ObjectId;
  loader: Types.ObjectId;
  date: string;
  time: string;
  items: Types.ObjectId[];
  status: TJOB_STATUS;
  isDeleted: boolean;
};
// export type TJob = {
//   customer: Types.ObjectId;
//   loader: Types.ObjectId; // Reference to the customer who posted the job
//   postalCode: string;
//   selectedService: string;
//   jobType: string;
//   items: Types.ObjectId[];
//   isDeleted: boolean;
// };
