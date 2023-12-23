// import { TJob } from './job.interface';

import { TJob } from './job.interface';
import { Job } from './job.model';

// create job
const createJob = async (payload: TJob): Promise<TJob | null> => {
  const result = await Job.create(payload);
  return result;
};
// get job
const getJob = async () => {};
// get jobs
const getJobs = async () => {
  const result = await Job.find();
  return result;
};
// update job
const updateJob = async () => {};
//delete job
const deleteJob = async () => {};

export const JobServices = {
  createJob,
  getJob,
  getJobs,
  updateJob,
  deleteJob,
};
