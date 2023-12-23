import { USER_ROLE, UserStatus } from './user.constants';

export type UserRole = keyof typeof USER_ROLE;
export type UserStatus = (typeof UserStatus)[number];

export type TUser = {
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  isDeleted: boolean;
};
