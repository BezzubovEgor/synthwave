import { Router } from 'express';
import async from '../utils/async';
import { getUsers } from '../controllers/users.controller';

const router = Router();

router
  .get('/', async(getUsers));

export default router;
