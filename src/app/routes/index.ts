import { Router } from 'express';
import { LoaderRoutes } from '../modules/loader/loader.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/loaders',
    route: LoaderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
