import { Router } from 'express';
import async from '../utils/async';
import { getIndex } from '../controllers/index.controller';

const router = Router();

router
  .get('/', async(getIndex));

export default router;
