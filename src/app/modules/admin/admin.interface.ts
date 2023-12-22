import { Types } from 'mongoose';
import { TJob } from '../job/job.interface';

export type TName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};
export type TAdmin = {
  username: string;
  user: Types.ObjectId;
  email: string;
  phone: string;
  name: TName;
  gender: 'male' | 'female';
  address: TAddress;
  jobs?: TJob[];
  profileImage: string;
};
