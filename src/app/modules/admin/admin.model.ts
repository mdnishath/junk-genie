import { Schema, model } from 'mongoose';
import { TAddress, TAdmin, TName } from './admin.interface';

const nameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
});
const adminSchema = new Schema<TAdmin>({
  username: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  name: nameSchema,
  gender: { type: String, enum: ['male', 'female'], required: true },
  address: addressSchema,
  profileImage: { type: String, required: true },
  jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // Assuming 'Job' is the name of the related model
  isDeleted: { type: Boolean, default: false },
});

export const Admin = model('Admin', adminSchema);
