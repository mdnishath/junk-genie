import { catchAsync } from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/sendSuccessResponse';
import { JobServices } from './job.service';

// create job
const createJob = catchAsync(async (req, res) => {
  const payload = await req.body;
  console.log(payload);

  // call job service
  const result = await JobServices.createJob(payload);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Job created successfully',
    data: result,
  });
});
// // get job
const getJob = catchAsync(async (req, res) => {
  const { id } = req.params;
  // call job service
  const result = await JobServices.getJob(id);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Job fetched successfully',
    data: result,
  });
});
// // get jobs
const getJobs = catchAsync(async (req, res) => {
  // call job service
  const result = await JobServices.getJobs();
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Jobs fetched successfully',
    data: result,
  });
});
// // update job
const updateJob = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = await req.body;

  // call job service
  const result = await JobServices.updateJob(id, payload);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Job updated successfully',
    data: result,
  });
});
// // delete job
const deleteJob = catchAsync(async (req, res) => {
  const { id } = req.params;
  // call job service
  const result = await JobServices.deleteJob(id);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Job deleted successfully',
    data: result,
  });
});

export const JobControllers = {
  createJob,
  getJob,
  getJobs,
  updateJob,
  deleteJob,
};
