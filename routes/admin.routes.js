import express from 'express';
import {
	getAddService,
	getAllService,
	getDashboard,
	getEditService,
	postAddService,
    postEditService,
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getDashboard);
router.get('/service/add', getAddService);
router.post('/service/add', postAddService);
router.get('/service/all', getAllService);
router.get('/service/edit/:serviceID', getEditService);
router.post('/service/edit', postEditService);

export default router;
