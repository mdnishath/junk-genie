import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createJobValidationSchema } from './job.validation';
import { JobControllers } from './job.controller';

const router = express.Router();
router.post(
  '/create-job',
  validateRequest(createJobValidationSchema),
  JobControllers.createJob,
);

export const JobRoutes = router;
