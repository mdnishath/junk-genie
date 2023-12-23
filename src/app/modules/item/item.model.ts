import { Schema, model } from 'mongoose';
import { TItem } from './item.interface';

const itemSchema = new Schema<TItem>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Item = model<TItem>('Item', itemSchema);
