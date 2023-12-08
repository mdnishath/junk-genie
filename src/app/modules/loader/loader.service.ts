import { ILoader } from './loader.interface';

import { Loader } from './loader.model';

//get loaders
const getLoaders = async (): Promise<ILoader[] | null> => {
  const result = await Loader.find({}).populate('user');
  return result;
};

export const LoaderServices = {
  getLoaders,
};
