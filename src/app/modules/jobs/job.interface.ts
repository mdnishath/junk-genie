import { Document, Types } from 'mongoose';
export interface IItem {
  name: string;
  price: number;
}

export interface IJob extends Document {
  customer: Types.ObjectId; // Reference to the customer who posted the job
  postalCode: string;
  selectedService: string;
  jobType: string;
  items: IItem[]; // Array of items with prices
}
