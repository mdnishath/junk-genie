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

// get all items controller

const getItems = catchAsync(async (req, res) => {
  const result = await ItemServices.getItems();
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Items fetched successfully',
    data: result,
  });
});

// update item controller

const updateItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  // item from request body
  const item = req.body;
  const result = await ItemServices.updateItem(id, item);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Item updated successfully',
    data: result,
  });
});

// delete item controller

const deleteItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ItemServices.deleteItem(id);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Item deleted successfully',
    data: result,
  });
});
export const ItemControllers = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
};
