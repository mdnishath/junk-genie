import { Schema, model } from 'mongoose';
import { IAddress, ICustomer, IName } from './customer.interface';

const nameSchema = new Schema<IName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
});

const customerSchema = new Schema<ICustomer>(
  {
    username: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    name: { type: nameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    address: { type: addressSchema, required: true },
    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // Assuming 'Job' is the name of the Job model
    profileImage: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Customer = model<ICustomer>('Customer', customerSchema);
