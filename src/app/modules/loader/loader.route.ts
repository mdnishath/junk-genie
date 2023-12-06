import express from 'express';
import { LoaderControllers } from './loader.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createLoaderValedationSchemaSchema } from './loader.valedation';

const router = express.Router();

router.post(
  '/create-loader',
  validateRequest(createLoaderValedationSchemaSchema),
  LoaderControllers.createUser,
);
router.get('/', LoaderControllers.getLoaders);

export const LoaderRoutes = router;
