import { User } from './user.model';
import { TUser } from './user.interface';
import { USER_ROLE } from './user.constants';

// create admin service
const createAdmin = async (payload: TUser) => {
  const result = await User.create({ ...payload, role: USER_ROLE.admin });
  return result;
};

export const UserServices = {
  createAdmin,
};
