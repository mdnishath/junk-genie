import { Schema, model } from 'mongoose';
import { IAddress, ILoader, IName } from './loader.interface';

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

const loaderSchema = new Schema<ILoader>(
  {
    usernames: { type: String, required: true },
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

export const Loader = model<ILoader>('Loader', loaderSchema);
