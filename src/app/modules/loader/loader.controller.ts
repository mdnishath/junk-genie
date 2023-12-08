import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { LoaderServices } from './loader.service';
import sendSuccessResponse from '../../utils/sendSuccessResponse';

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
  getLoaders,
};
