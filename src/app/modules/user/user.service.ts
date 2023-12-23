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

// update user
const updateUser = async (id: string, payload: TUser) => {
  // extract object type data
  const { name, address, jobs, ...remainingUserData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingUserData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (address && Object.keys(address).length) {
    for (const [key, value] of Object.entries(address)) {
      modifiedUpdatedData[`address.${key}`] = value;
    }
  }
  if (jobs && jobs.length) {
    // Assuming jobs is an array of objects
    modifiedUpdatedData.jobs = jobs;
  }

  const result = await User.findByIdAndUpdate(id, modifiedUpdatedData, { new: true });
  return result;
};

export const UserServices = {
  createAdmin,
  createLoader,
  createCustomer,
  updateUser,
};
