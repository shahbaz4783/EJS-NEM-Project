import express from 'express';
import {
	getAllJobs,
	getAllServices,
	getJobDetails,
	getServiceDetails,
} from '../controllers/marketplace.controller.js';

const router = express.Router();

router.get('/services/all', getAllServices);
router.get('/service/:serviceID', getServiceDetails);

router.get('/jobs/all', getAllJobs);
router.get('/job/:jobID', getJobDetails);


export default router;
