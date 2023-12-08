import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';

//get loaders
const getCustomers = async (): Promise<ICustomer[] | null> => {
  const result = await Customer.find({}).populate('user');
  return result;
};

export const CustomerServices = {
  getCustomers,
};
