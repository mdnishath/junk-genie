import express from 'express';
import { ItemControllers } from './item.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { createItemValidationSchema, updateItemValidationSchema } from './item.validation';

const router = express.Router();
router.post(
  '/create-item',
  validateRequest(createItemValidationSchema),
  ItemControllers.createItem,
);
router.get('/', ItemControllers.getItems);
router.patch('/:id', validateRequest(updateItemValidationSchema), ItemControllers.updateItem);
router.delete('/:id', ItemControllers.deleteItem);

export const ItemRoutes = router;
