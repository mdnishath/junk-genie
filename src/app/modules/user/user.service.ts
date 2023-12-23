import { User } from './user.model';
import { TUser } from './user.interface';
import { USER_ROLE } from './user.constants';

// create admin
const createAdmin = async (payload: TUser) => {
  const result = await User.create({ ...payload, role: USER_ROLE.admin });
  return result;
};
// create loader
const createLoader = async (payload: TUser) => {
  const result = await User.create({ ...payload, role: USER_ROLE.loader });
  return result;
};
// create customer
const createCustomer = async (payload: TUser) => {
  const result = await User.create({ ...payload, role: USER_ROLE.customer });
  return result;
};

export const UserServices = {
  createAdmin,
  createLoader,
  createCustomer,
};
