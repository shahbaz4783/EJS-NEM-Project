import express from 'express';
import {
	deleteService,
	getAddService,
	getAllJobs,
	getAllServices,
	getDashboard,
	getEditService,
	getSettings,
	postAddService,
	postEditService,
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getDashboard);
router.get('/service/add', getAddService);
router.get('/services/all', getAllServices);
router.get('/settings', getSettings);
router.get('/service/edit/:serviceID', getEditService);

router.post('/service/add', postAddService);
router.post('/service/edit', postEditService);
router.post('/service/delete', deleteService);

router.get('/jobs/all', getAllJobs);

export default router;
