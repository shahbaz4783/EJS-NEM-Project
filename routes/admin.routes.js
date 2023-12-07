import express from 'express';
import { getAddService, getAllService, getDashboard, postAddService } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getDashboard);
router.get('/service/add', getAddService);
router.post('/service/add', postAddService);
router.get('/service/all', getAllService);

export default router;
