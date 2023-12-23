import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ItemRoutes } from '../modules/item/item.route';

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
];

allRouts.forEach((route) => router.use(route.path, route.route));

export default router;
