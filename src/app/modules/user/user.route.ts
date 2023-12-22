import express from 'express';
import { UserControllers } from './user.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { createAdminValidationSchema } from '../admin/admin.validation';
const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
