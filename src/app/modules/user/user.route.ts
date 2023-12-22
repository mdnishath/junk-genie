import express from 'express';
import { UserControllers } from './user.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { createUserValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(createUserValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
