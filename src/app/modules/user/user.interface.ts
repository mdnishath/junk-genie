import { USER_ROLE, UserStatus } from './user.constants';

export type UserRole = keyof typeof USER_ROLE;
export type UserStatus = (typeof UserStatus)[number];

export type TUser = {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: UserRole;
  status: UserStatus;
  isDeleted: boolean;
};
