import express from 'express';
import {
	getAllJobs,
	getAllServices,
	getCart,
	getJobDetails,
	getOrderPage,
	getServiceDetails,
	postCart,
	postDeleteCartService,
	postOrder,
} from '../controllers/marketplace.controller.js';

const router = express.Router();

router.get('/services/all', getAllServices);
router.get('/service/:serviceID', getServiceDetails);

router.get('/jobs/all', getAllJobs);
router.get('/job/:jobID', getJobDetails);

router.get('/cart', getCart)
router.post('/cart', postCart)
router.post('/cart/delete', postDeleteCartService)

router.get('/order', getOrderPage);
router.post('/order', postOrder);

export default router;
