import { TItem } from './item.interface';
import { Item } from './item.model';

// create item
const createItem = async (payload: TItem): Promise<TItem | null> => {
  const result = await Item.create(payload);
  return result;
};

// get all items
const getItems = async (): Promise<TItem[] | null> => {
  const result = await Item.find();
  return result;
};

// update item

const updateItem = async (id: string, payload: Partial<TItem>): Promise<TItem | null> => {
  const result = await Item.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete item
const deleteItem = async (id: string): Promise<TItem | null> => {
  const result = await Item.findByIdAndUpdate(id, {
    isDeleted: true,
  });
  return result;
};

export const ItemServices = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
};
