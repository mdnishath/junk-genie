import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Loader } from '../loader/loader.model';
import { IUser } from './user.interface';
import { User } from './user.model';
import mongoose from 'mongoose';
import { ILoader } from '../loader/loader.interface';
import { Customer } from '../customer/customer.model';
import { ICustomer } from '../customer/customer.interface';

//create new user
//create new user
const createLoader = async (
  password: string,
  payload: ILoader,
): Promise<ILoader> => {
  const userData: Partial<IUser> = {};

  userData.password = password;
  userData.role = 'loader';
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session }); // array
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.user = newUser[0]._id; //referen
    const loader = await Loader.create([payload], { session });

    await session.commitTransaction();
    await session.endSession();
    return loader[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

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
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const UserServices = {
  createLoader,
  createCustomer,
};
