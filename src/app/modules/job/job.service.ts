// import { TJob } from './job.interface';

import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TJob } from './job.interface';
import { Job } from './job.model';

// create job
const createJob = async (payload: TJob): Promise<TJob | null> => {
  const result = await Job.create(payload);
  return result;
};
// get job
const getJob = async (id: string): Promise<TJob | null> => {
  const isExists = await Job.findById(id);
  if (!isExists) {
    throw new AppError(`Job ${id} does not exist`, httpStatus.NOT_FOUND);
  }
  const result = await Job.findById(id);
  return result;
};
// get jobs
const getJobs = async () => {
  const result = await Job.find();
  return result;
};
// update job
const updateJob = async (id: string, payload: Partial<TJob>): Promise<TJob | null> => {
  const isExists = await Job.findById(id);
  if (!isExists) {
    throw new AppError(`Job ${id} does not exist`, httpStatus.NOT_FOUND);
  }
  const { items, ...remainingJobData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingJobData,
  };
  if (items && items.length) {
    // Assuming jobs is an array of objects
    modifiedUpdatedData.items = items;
  }
  const result = await Job.findByIdAndUpdate(id, modifiedUpdatedData, { new: true });
  return result;
};
//delete job
const deleteJob = async (id: string): Promise<TJob | null> => {
  const isExists = await Job.findById(id);
  if (!isExists) {
    throw new AppError(`Job ${id} does not exist`, httpStatus.NOT_FOUND);
  }
  const result = await Job.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return result;
};

export const JobServices = {
  createJob,
  getJob,
  getJobs,
  updateJob,
  deleteJob,
};
