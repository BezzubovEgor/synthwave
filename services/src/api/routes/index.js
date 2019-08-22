import { Router } from 'express';
import indexRoutes from './index.routes';
import userRoutes from './user.routes';

const router = Router();

router
  .use('/', indexRoutes)
  .use('/users', userRoutes);

export default router;
