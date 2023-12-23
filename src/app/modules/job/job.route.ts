import express from 'express';
import { JobControllers } from './job.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { createJobValidationSchema } from './job.validation';
const router = express.Router();

router.post('/create-job', validateRequest(createJobValidationSchema), JobControllers.createJob);
router.get('/:id', JobControllers.getJob);
router.get('/', JobControllers.getJobs);
router.patch('/:id', JobControllers.updateJob);
router.delete('/:id', JobControllers.deleteJob);

export const JobRoutes = router;
