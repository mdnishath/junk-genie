import httpStatus from 'http-status';

import { CustomerServices } from './customer.service';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';

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
  getCustomers,
};
