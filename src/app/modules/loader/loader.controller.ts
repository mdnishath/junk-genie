import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { DEFAULT_PASSWORD } from '../../config';
import { LoaderServices } from './loader.service';
import sendSuccessResponse from '../../utils/sendSuccessResponse';

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

// get all loaders
const getLoaders = catchAsync(async (req, res) => {
  //call user service
  const data = await LoaderServices.getLoaders();
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Loader created successfully',
    data,
  });
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Users feched successfully',
    data,
  });
});
export const LoaderControllers = {
  createUser,
  getLoaders,
};
