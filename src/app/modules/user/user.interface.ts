import { USER_ROLE, UserStatus } from './user.constants';

export type UserRole = keyof typeof USER_ROLE;
export type UserStatus = (typeof UserStatus)[number];
import { Types } from 'mongoose';
import { TJob } from '../job/job.interface';

export type TName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type TUser = {
  username: string;
  password: string;
  user: Types.ObjectId;
  email: string;
  phone: string;
  name: TName;
  gender: 'male' | 'female';
  address: TAddress;
  jobs?: TJob[];
  profileImage: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: UserRole;
  status: UserStatus;
  isDeleted: boolean;
};
