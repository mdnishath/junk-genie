import { Schema, model } from 'mongoose';
import { IJob } from './job.interface';

const jobSchema = new Schema<IJob>(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    postalCode: { type: String, required: true },
    selectedService: { type: String, required: true },
    jobType: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  },
  { timestamps: true },
);

export const Job = model<IJob>('Job', jobSchema);
