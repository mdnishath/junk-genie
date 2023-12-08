// item.model.ts
import { Schema, model } from 'mongoose';
import { IItem } from './item.interface';

const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Item = model<IItem>('Item', itemSchema);
