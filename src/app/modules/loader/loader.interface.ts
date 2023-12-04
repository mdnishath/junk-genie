import { Types } from 'mongoose';
import { IJob } from '../jobs/job.interface';

export interface IName {
  firstName: string;
  lastName: string;
}
export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
export interface ILoader {
  usernames: string;
  user: Types.ObjectId;
  email: string;
  phone: string;
  name: IName;
  gender: 'male' | 'female';
  address: IAddress;
  jobs?: IJob[];
  profileImage: string;
}
