import { Router } from 'express';
import { handleTest } from '../controllers/testControllers';

export const testRouter: Router = Router();

testRouter.get('/', handleTest);
