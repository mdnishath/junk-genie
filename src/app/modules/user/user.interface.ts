export type TRole = 'loader' | 'admin' | 'user';

export interface IUser {
  password: string;
  needPasswordChange: boolean;
  role: TRole;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
