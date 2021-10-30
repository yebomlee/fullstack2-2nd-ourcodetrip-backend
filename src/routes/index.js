import express from 'express';
import { NotFoundError } from '../utils/errors';
import categoryRouter from './categoryRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/categories', categoryRouter);
router.use('/users', userRouter);

router.get('/not-found', (req, res, next) => {
  throw new NotFoundError('Not found api path');
});

export default router;
