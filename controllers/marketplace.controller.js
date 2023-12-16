import Job from '../models/Job.js';
import Service from '../models/Service.js';

export const getAllServices = async (req, res) => {
	try {
		const allServices = await Service.find();
		res.render('index', {
            path: '/services',
			content: './services/service-list',
			services: allServices,
			pageTitle: 'Browse All Services',
		});
	} catch (error) {
		console.log(error);
	}
};

export const getServiceDetails = async (req, res) => {
	try {
		const serviceID = req.params.serviceID;
		const serviceDetails = await Service.findById(serviceID);
		res.render('index', {
			path: '/services',
			content: './services/service-details',
			info: serviceDetails,
			pageTitle: serviceDetails.title,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getAllJobs = async (req, res) => {
	try {
		const allJobs = await Job.find();
		res.render('index', {
			path: '/jobs',
			content: './jobs/job-list',
			jobs: allJobs,
			pageTitle: 'Browse All Job Listing',
		});
	} catch (error) {
		console.log(error);
	}
};

export const getJobDetails = async (req, res) => {
	try {
		const jobID = req.params.jobID;
		const jobDetails = await Job.findById(jobID);
		res.render('index', {
			path: '/jobs',
			content: './jobs/job-details',
			info: jobDetails,
			pageTitle: jobDetails.title,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getCart = (req, res) => {
	res.render('index', {
		path: '/cart',
		pageTitle: 'Your Cart',
		content: './shop/cart',
	});
};


export const postCart = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		const service = await Service.findById(serviceID);
		console.log(serviceID);
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}

		await req.user.addToCart(service);

		res.redirect('/cart');
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

