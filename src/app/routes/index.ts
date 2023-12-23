import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ItemRoutes } from '../modules/item/item.route';
import { JobRoutes } from '../modules/job/job.route';

const router = express.Router();

const allRouts = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/items',
    route: ItemRoutes,
  },
  {
    path: '/jobs',
    route: JobRoutes,
  },
];

allRouts.forEach((route) => router.use(route.path, route.route));

export default router;
