import { UserServices } from './user.service';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { DEFAULT_PASSWORD } from '../../config';
import sendSuccessResponse from '../../utils/sendSuccessResponse';

// create loader
const createLoader = catchAsync(async (req, res) => {
  //   console.log(req.body);

  const password = await req.body?.password;
  const loader = await req.body;
  // console.log(loader);

  //call user service
  const data = await UserServices.createLoader(
    password ? password : (DEFAULT_PASSWORD as string),
    loader,
  );
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'User created successfully',
    data,
  });
});

// create customer
const createCustomer = catchAsync(async (req, res) => {
  //   console.log(req.body);
  const password = await req.body?.password;
  const customer = await req.body;

  // console.log(customer);

  //call user service
  const data = await UserServices.createCustomer(
    password ? password : (DEFAULT_PASSWORD as string),
    customer,
  );
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Customer created successfully',
    data,
  });
});

export const UserControllers = {
  createLoader,
  createCustomer,
};
