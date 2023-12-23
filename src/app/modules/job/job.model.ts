import { Query, Schema, model } from 'mongoose';
import { TJob } from './job.interface';

const jobSchema = new Schema<TJob>({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming there is a 'Customer' model referenced by ObjectId
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  selectedService: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item', // Assuming there is an 'Item' model referenced by ObjectId
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
jobSchema.pre(/^find/, function (this: Query<TJob, Document>, next) {
  this.where({ isDeleted: false });
  next();
});

export const Job = model<TJob>('Job', jobSchema);
