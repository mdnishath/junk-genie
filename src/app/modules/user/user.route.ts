import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createLoaderValedationSchemaSchema } from '../loader/loader.valedation';
import { UserControllers } from './user.controller';
import { createCustomerValedationSchemaSchema } from '../customer/customer.valedation';
const router = express.Router();

router.post(
  '/create-loader',
  validateRequest(createLoaderValedationSchemaSchema),
  UserControllers.createLoader,
);
router.post(
  '/create-customer',
  validateRequest(createCustomerValedationSchemaSchema),
  UserControllers.createCustomer,
);

export const UserRoutes = router;
