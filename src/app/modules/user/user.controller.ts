// create admin controller

import { catchAsync } from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/sendSuccessResponse';
import { UserServices } from './user.service';

// create admin controller
const createAdmin = catchAsync(async (req, res) => {
  const payload = await req.body;
  const { password } = await req.body;

  // call user service
  const user = await UserServices.createAdmin(payload, password);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Admin created successfully',
    data: user,
  });
});
// create loader controller
const createLoader = catchAsync(async (req, res) => {
  const payload = await req.body;
  const { password } = await req.body;

  // call user service
  const user = await UserServices.createLoader(payload, password);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Loader created successfully',
    data: user,
  });
});
// create admin controller
const createCustomer = catchAsync(async (req, res) => {
  const payload = await req.body;
  const { password } = await req.body;

  // call user service
  const user = await UserServices.createCustomer(payload, password);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Customer created successfully',
    data: user,
  });
});

export const UserControllers = {
  createAdmin,
  createLoader,
  createCustomer,
};
