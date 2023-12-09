import express from 'express';
import {
    deleteJob,
	deleteService,
	getAddJob,
	getAddService,
	getAllJobs,
	getAllServices,
	getDashboard,
	getEditJob,
	getEditService,
	getSettings,
	postAddJob,
	postAddService,
	postEditJob,
	postEditService,
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/', getDashboard);
router.get('/services/all', getAllServices);
router.get('/service/add', getAddService);
router.get('/service/edit/:serviceID', getEditService);

router.post('/service/add', postAddService);
router.post('/service/edit', postEditService);
router.post('/service/delete', deleteService);

router.get('/jobs/all', getAllJobs);
router.get('/job/add', getAddJob);
router.get('/job/edit/:jobID', getEditJob);

router.post('/job/add', postAddJob);
router.post('/job/edit', postEditJob);
router.post('/job/delete', deleteJob);

router.get('/settings', getSettings);

export default router;
