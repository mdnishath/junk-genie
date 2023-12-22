import { Schema, model } from 'mongoose';
import { TAddress, TName, TUser } from './user.interface';
import { USER_ROLE, UserStatus } from './user.constants';

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

const userSchema = new Schema<TUser>(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: { type: String, required: true },
    name: nameSchema,
    gender: { type: String, enum: ['male', 'female'], required: true },
    address: addressSchema,
    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // Assuming 'Job' is the name of the related model
    profileImage: { type: String, required: true },

    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: { type: String, enum: Object.values(USER_ROLE), required: true },
    status: { type: String, enum: UserStatus, default: UserStatus[1] },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
