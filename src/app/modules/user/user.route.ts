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
router.post(
  '/create-loader',
  validateRequest(createUserValidationSchema),
  UserControllers.createLoader,
);
router.post(
  '/create-customer',
  validateRequest(createUserValidationSchema),
  UserControllers.createCustomer,
);
router.patch('/:id', UserControllers.createCustomer);
export const UserRoutes = router;
