import express from 'express';
import { getAddService, getAllService, getDashboard } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getDashboard);

router.get('/service/add', getAddService);

router.get('/service/all', getAllService);

export default router;
