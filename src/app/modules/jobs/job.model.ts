import { Schema, model } from 'mongoose';
import { IItem, IJob } from './job.interface';

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const jobSchema = new Schema<IJob>(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    postalCode: { type: String, required: true },
    selectedService: { type: String, required: true },
    jobType: { type: String, required: true },
    items: [itemSchema],
  },
  { timestamps: true },
);

export const Job = model<IJob>('Job', jobSchema);
