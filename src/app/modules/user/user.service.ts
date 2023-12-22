import mongoose from 'mongoose';
import { TAdmin } from '../admin/admin.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TUser } from './user.interface';
import { DEFAULT_PASSWORD } from '../../config';
import { USER_ROLE } from './user.constants';
import { Admin } from '../admin/admin.model';

// create admin service
const createAdmin = async (payload: TAdmin, password: string) => {
  const userData: Partial<TUser> = {};
  userData.email = payload.email;
  userData.password = password || DEFAULT_PASSWORD;
  userData.role = USER_ROLE.admin;
  //start session
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError('Could not create admin', httpStatus.BAD_REQUEST);
    }
    // throw new Error('test transaction failed');

    payload.user = newUser[0]._id;
    const newAdmin = await Admin.create([payload], { session });
    await session.commitTransaction();
    await session.endSession();
    return newAdmin;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError('Could not create admin', httpStatus.BAD_REQUEST);
  }
};

export const UserServices = {
  createAdmin,
};
