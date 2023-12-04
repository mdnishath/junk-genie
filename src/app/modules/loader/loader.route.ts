import express from 'express';
import { LoaderControllers } from './loader.controller';

const router = express.Router();

router.post('/create-loader', LoaderControllers.createUser);
router.get('/', LoaderControllers.getLoaders);

export const LoaderRoutes = router;
