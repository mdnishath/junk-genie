import { Router } from 'express';
import { LoaderRoutes } from '../modules/loader/loader.route';
import { CustomerRoutes } from '../modules/customer/customer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/loaders',
    route: LoaderRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
