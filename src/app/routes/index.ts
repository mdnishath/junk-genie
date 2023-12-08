import { Router } from 'express';
import { CustomerRoutes } from '../modules/customer/customer.route';
import { UserRoutes } from '../modules/user/user.route';
import { JobRoutes } from '../modules/jobs/job.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/jobs',
    route: JobRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
