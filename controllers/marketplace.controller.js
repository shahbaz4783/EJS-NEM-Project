import Job from '../models/Job.js';
import Order from '../models/Order.js';
import Service from '../models/Service.js';

export const getAllServices = async (req, res) => {
	try {
		const allServices = await Service.find();
		res.render('index', {
			path: '/services',
			content: './services/index',
			services: allServices,
			pageTitle: 'Browse All Services',
			isAuth: req.session.isLoggedIn,
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
			isAuth: req.session.isLoggedIn,
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
			content: './jobs/index',
			jobs: allJobs,
			pageTitle: 'Browse All Job Listing',
			isAuth: req.session.isLoggedIn,
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
			isAuth: req.session.isLoggedIn,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getCart = async (req, res) => {
	try {
		await req.user.populate('cart.services.serviceID');
		const services = req.user.cart.services;
		res.render('index', {
			path: '/cart',
			pageTitle: 'Your Cart',
			content: './shop/cart',
			services: services,
			isAuth: req.session.isLoggedIn,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};


export const postCart = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		const service = await Service.findById(serviceID);
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

export const postDeleteCartService = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		await req.user.removeFromCart(serviceID);
		res.redirect('/cart');

	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};


export const getOrderPage = (req, res) => {
	res.send('Order Now!')
}

export const postOrder = async (req, res) => {
	try {
		await req.user.populate('cart.services.serviceID');
		const services = req.user.cart.services.map((i) => {
			return { quantity: i.quantity, service: { ...i.serviceID._doc } };
		});

		const order = new Order({
			user: {
				name: req.user.name,
				userID: req.user,
			},
			services: services,
		});
		order.save();
		req.user.clearCart();
		res.redirect('/order');
		
	} catch (error) {
		console.log(error);
	}
};
