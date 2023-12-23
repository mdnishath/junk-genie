import express from 'express';
import { UserControllers } from './user.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { createAdminValidationSchema } from '../admin/admin.validation';
import { createLoaderValidationSchema } from '../loader/loader.validation';
import { createCustomerValidationSchema } from '../customer/customer.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
router.post(
  '/create-loader',
  validateRequest(createLoaderValidationSchema),
  UserControllers.createLoader,
);
router.post(
  '/create-customer',
  validateRequest(createCustomerValidationSchema),
  UserControllers.createCustomer,
);
router.patch('/:id', UserControllers.createCustomer);
export const UserRoutes = router;
