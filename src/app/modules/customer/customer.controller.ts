import httpStatus from 'http-status';

import { DEFAULT_PASSWORD } from '../../config';

import { CustomerServices } from './customer.service';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';

// create user
const createCustomer = catchAsync(async (req, res) => {
  //   console.log(req.body);

  const password = await req.body?.password;
  const { customer } = await req.body;
  // console.log(customer);

  //call user service
  const data = await CustomerServices.createCustomer(
    password ? password : (DEFAULT_PASSWORD as string),
    customer,
  );
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Customer created successfully',
    data,
  });
});

// get all loaders
const getCustomers = catchAsync(async (req, res) => {
  //call user service
  const data = await CustomerServices.getCustomers();
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Customers retrieved successfully',
    data,
  });
});
export const CustomerControllers = {
  createCustomer,
  getCustomers,
};