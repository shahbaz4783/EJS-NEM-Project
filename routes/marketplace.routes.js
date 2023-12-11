import express from 'express';
import {
	getAllJobs,
	getAllServices,
	getCart,
	getJobDetails,
	getServiceDetails,
} from '../controllers/marketplace.controller.js';

const router = express.Router();

router.get('/services/all', getAllServices);
router.get('/service/:serviceID', getServiceDetails);

router.get('/jobs/all', getAllJobs);
router.get('/job/:jobID', getJobDetails);

router.get('/cart', getCart)

export default router;
