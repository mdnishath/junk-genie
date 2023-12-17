import express from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const allRouts = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

allRouts.forEach((route) => router.use(route.path, route.route));

export default router;
