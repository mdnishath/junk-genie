import { TItem } from './item.interface';
import { Item } from './item.model';

// create item
const createItem = async (payload: TItem): Promise<TItem | null> => {
  const result = await Item.create(payload);
  return result;
};

export const ItemServices = {
  createItem,
};
