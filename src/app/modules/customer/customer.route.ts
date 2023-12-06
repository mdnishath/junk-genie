import express from 'express';
import { CustomerControllers } from './customer.controller';
import { createCustomerValedationSchemaSchema } from './customer.valedation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-customer',
  validateRequest(createCustomerValedationSchemaSchema),
  CustomerControllers.createCustomer,
);
router.get('/', CustomerControllers.getCustomers);

export const CustomerRoutes = router;
