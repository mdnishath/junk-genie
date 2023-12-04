import { UserServices } from './user.service';
import httpStatus from 'http-status';
import catchAsync from '../../libs/catchAsync';
import { DEFAULT_PASSWORD } from '../../config';

// create user
const createUser = catchAsync(async (req, res) => {
  const password = await req.body?.password;
  //call user service
  const data = await UserServices.createUser(
    password ? password : (DEFAULT_PASSWORD as string),
  );
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'User created successfully',
    data,
  });
});

export const UserControllers = {
  createUser,
};
