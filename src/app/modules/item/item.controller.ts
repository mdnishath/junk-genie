import { catchAsync } from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/sendSuccessResponse';
import { ItemServices } from './item.service';

// create item controller
const createItem = catchAsync(async (req, res) => {
  // item from request body
  const item = req.body;
  const result = await ItemServices.createItem(item);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Item created successfully',
    data: result,
  });
});

export const ItemControllers = {
  createItem,
};
