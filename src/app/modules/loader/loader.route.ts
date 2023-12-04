import express from 'express';
import { LoaderControllers } from './loader.controller';

const router = express.Router();

router.post('/create-loader', LoaderControllers.createUser);

export const LoaderRoutes = router;
