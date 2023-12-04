import httpStatus from 'http-status';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ILoader } from './loader.interface';
import AppError from '../../errors/AppError';
import { Loader } from './loader.model';
import mongoose from 'mongoose';

//create new user
const createUser = async (password: string, payload: ILoader) => {
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
    console.log(newUser);

    payload.user = newUser[0]._id; //referen
    const loader = await Loader.create([payload], { session });
    await session.commitTransaction();
    await session.endSession();
    return loader;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};

export const LoaderServices = {
  createUser,
};
