import { Query, Schema, model } from 'mongoose';
import { TItem } from './item.interface';

const itemSchema = new Schema<TItem>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

itemSchema.pre(/^find/, function (this: Query<TItem, Document>, next) {
  this.where({ isDeleted: false });
  next();
});
export const Item = model<TItem>('Item', itemSchema);
