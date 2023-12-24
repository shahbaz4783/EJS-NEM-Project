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
import { isAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', isAuth, getDashboard);
router.get('/services/all', isAuth, getAllServices);
router.get('/service/add', isAuth, getAddService);
router.get('/service/edit/:serviceID', isAuth, getEditService);

router.post('/service/add', isAuth, postAddService);
router.post('/service/edit', isAuth, postEditService);
router.post('/service/delete', isAuth, deleteService);

router.get('/jobs/all', isAuth, getAllJobs);
router.get('/job/add', isAuth, getAddJob);
router.get('/job/edit/:jobID', isAuth, getEditJob);

router.post('/job/add', isAuth, postAddJob);
router.post('/job/edit', isAuth, postEditJob);
router.post('/job/delete', isAuth, deleteJob);

router.get('/settings', isAuth, getSettings);

export default router;
