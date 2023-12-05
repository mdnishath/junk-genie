import httpStatus from 'http-status';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

import AppError from '../../errors/AppError';

import mongoose from 'mongoose';
import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';

//create new user
const createCustomer = async (
  password: string,
  payload: ICustomer,
): Promise<ICustomer> => {
  const userData: Partial<IUser> = {};

  userData.password = password;
  userData.role = 'customer';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session }); // array
    // console.log(newUser);

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create customer');
    }

    payload.user = newUser[0]._id; //referen
    const loader = await Customer.create([payload], { session });

    await session.commitTransaction();
    await session.endSession();
    return loader[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create customer');
  }
};

//get loaders
const getCustomers = async (): Promise<ICustomer[] | null> => {
  const result = await Customer.find({}).populate('user');
  return result;
};

export const CustomerServices = {
  createCustomer,
  getCustomers,
};
