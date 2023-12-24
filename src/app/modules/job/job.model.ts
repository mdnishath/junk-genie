import { Query, Schema, model } from 'mongoose';
import { TJob } from './job.interface';
import { JOB_STATUS } from './job.constant';

const jobSchema = new Schema<TJob>({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  loader: {
    type: Schema.Types.ObjectId,
    ref: 'Loader',
    default: null,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item', // Assuming a separate model for items
    },
  ],
  status: { type: String, enum: Object.values(JOB_STATUS), default: JOB_STATUS.pending },
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
