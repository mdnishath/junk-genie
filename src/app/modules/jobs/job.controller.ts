import httpStatus from 'http-status';

import { JobServices } from './job.service';
import { catchAsync } from '../../utils/catchAsync';

const createJob = catchAsync(async (req, res) => {
  const job = await req.body;
  //call user service
  const data = await JobServices.createJob(job);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'Job created successfully',
    data,
  });
});

export const JobControllers = {
  createJob,
};
