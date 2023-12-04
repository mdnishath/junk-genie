import { IUser } from './user.interface';
import { User } from './user.model';

//create new user
const createUser = async (password: string): Promise<IUser> => {
  const userData: Partial<IUser> = {};

  userData.password = password;
  userData.role = 'loader';
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createUser,
};
