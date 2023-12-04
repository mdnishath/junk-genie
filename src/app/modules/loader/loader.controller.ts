import httpStatus from 'http-status';
import catchAsync from '../../libs/catchAsync';
import { DEFAULT_PASSWORD } from '../../config';
import { LoaderServices } from './loader.service';

// create user
const createUser = catchAsync(async (req, res) => {
  //   console.log(req.body);

  const password = await req.body?.password;
  const { loader } = await req.body;
  //call user service
  const data = await LoaderServices.createUser(
    password ? password : (DEFAULT_PASSWORD as string),
    loader,
  );
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'User created successfully',
    data,
  });
});

export const LoaderControllers = {
  createUser,
};