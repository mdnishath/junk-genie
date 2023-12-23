import { User } from './user.model';
import { TUser } from './user.interface';
import { USER_ROLE } from './user.constants';
import { DEFAULT_PASSWORD } from '../../config';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';
import { TLoader } from '../loader/loader.interface';
import { Loader } from '../loader/loader.model';
import { TCustomer } from '../customer/customer.interface';
import { Customer } from '../customer/customer.model';

// create admin
const createAdmin = async (payload: TAdmin, password: string): Promise<TAdmin | null> => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (DEFAULT_PASSWORD as string);
  userData.email = payload.email;

  //set student role
  userData.role = USER_ROLE.admin;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session }); // array
    if (!newUser.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    payload.user = newUser[0]._id;
    const newAdmin = await Admin.create([payload], { session });
    if (!newAdmin.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    await session.commitTransaction();
    await session.endSession();
    return newAdmin[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
// create loader
const createLoader = async (payload: TLoader, password: string): Promise<TLoader | null> => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (DEFAULT_PASSWORD as string);
  userData.email = payload.email;

  //set student role
  userData.role = USER_ROLE.loader;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session }); // array
    if (!newUser.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    payload.user = newUser[0]._id;
    const newLoader = await Loader.create([payload], { session });
    if (!newLoader.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    await session.commitTransaction();
    await session.endSession();
    return newLoader[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
// create customer
const createCustomer = async (payload: TCustomer, password: string): Promise<TCustomer | null> => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (DEFAULT_PASSWORD as string);
  userData.email = payload.email;

  //set student role
  userData.role = USER_ROLE.customer;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session }); // array
    if (!newUser.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    payload.user = newUser[0]._id;
    const newCustomer = await Customer.create([payload], { session });
    if (!newCustomer.length) {
      throw new AppError('Failed to create user', httpStatus.BAD_REQUEST);
    }
    await session.commitTransaction();
    await session.endSession();
    return newCustomer[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

// update user
const updateUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const UserServices = {
  createAdmin,
  createLoader,
  createCustomer,
  updateUser,
};

// // extract object type data
// const { name, address, jobs, ...remainingUserData } = payload;

// const modifiedUpdatedData: Record<string, unknown> = {
//   ...remainingUserData,
// };

// if (name && Object.keys(name).length) {
//   for (const [key, value] of Object.entries(name)) {
//     modifiedUpdatedData[`name.${key}`] = value;
//   }
// }
// if (address && Object.keys(address).length) {
//   for (const [key, value] of Object.entries(address)) {
//     modifiedUpdatedData[`address.${key}`] = value;
//   }
// }
// if (jobs && jobs.length) {
//   // Assuming jobs is an array of objects
//   modifiedUpdatedData.jobs = jobs;
// }

// const result = await User.findByIdAndUpdate(id, modifiedUpdatedData, { new: true });
// return result;
