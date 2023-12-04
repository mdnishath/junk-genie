import { Schema, model } from 'mongoose';
import { IUser, TRole } from './user.interface';

const roles: TRole = 'loader' || 'admin' || 'user';
const userSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: [roles], default: 'user' },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
