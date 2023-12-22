import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { USER_ROLE, UserStatus } from './user.constants';

const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
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
