import express from 'express';
import { createLoaderValedationSchemaSchema } from '../loader/loader.valedation';
import { UserControllers } from './user.controller';
import { createCustomerValedationSchemaSchema } from '../customer/customer.valedation';
import { validateRequest } from '../../../middlewares/validateRequest';
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
router.get(
  '/',

  UserControllers.getUsers,
);

export const UserRoutes = router;
