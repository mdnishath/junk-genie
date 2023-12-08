import { IJob } from './job.interface';
import { Job } from './job.model';

// create job
const createJob = async (payload: IJob): Promise<IJob | null> => {
  const result = await Job.create(payload);
  return result;
};

export const JobServices = {
  createJob,
};
