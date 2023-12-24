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
import { isAuth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/services/all', getAllServices);
router.get('/service/:serviceID', getServiceDetails);

router.get('/jobs/all', getAllJobs);
router.get('/job/:jobID', getJobDetails);

router.get('/cart', getCart)
router.post('/cart', postCart)
router.post('/cart/delete', postDeleteCartService)

router.get('/order', isAuth, getOrderPage);
router.post('/order', isAuth, postOrder);

export default router;
