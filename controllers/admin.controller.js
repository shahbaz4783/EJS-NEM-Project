import Service from '../models/Service.js';
import Job from '../models/Job.js';

export const getDashboard = (req, res) => {
	res.render('admin/index', {
		content: './dashboard',
		pageTitle: 'Admin Panel',
		path: '/',
	});
};

//------------- Service Controller

//------ get
export const getAddService = (req, res) => {
	res.render('admin/index', {
		content: './service-form',
		pageTitle: 'Admin Panel',
		path: '/service/add',
		editing: false,
	});
};

export const getAllServices = async (req, res) => {
	try {
		const services = await Service.find();
		res.render('admin/index', {
			content: './all-service',
			pageTitle: 'Manage Your Services',
			path: '/services/all',
			services: services,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const getEditService = async (req, res) => {
	const editMode = req.query.edit;
	if (!editMode) {
		res.redirect('/admin');
	}
	try {
		const serviceID = req.params.serviceID;
		const service = await Service.findById(serviceID);
		res.render('admin/index', {
			content: './service-form',
			editing: editMode,
			path: '/service/add',
			pageTitle: 'Edit Your Service Details',
			serviceInfo: service,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const getSettings = async (req, res) => {
	try {
		res.render('admin/index', {
			content: './settings',
			pageTitle: 'Admin Panel',
			path: '/settings',
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

//------ post

export const postAddService = async (req, res) => {
	const title = req.body.title;
	const price = req.body.price;
	const description = req.body.description;
	const tag = req.body.tag;
	const userID = req.user;

	const service = new Service({ title, tag, price, description, userID });
	try {
		await service.save();
		res.redirect('/admin/services/all');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const postEditService = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		const updatedTitle = req.body.title;
		const updatedPrice = req.body.price;
		const updatedDescription = req.body.description;
		const updatedTag = req.body.tag;

		const service = await Service.findById(serviceID);

		if (!service) {
			return res.status(404).send('Service not found');
		}

		service.title = updatedTitle;
		service.price = updatedPrice;
		service.description = updatedDescription;
		service.tag = updatedTag;

		await service.save();
		res.redirect('/admin/services/all');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const deleteService = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		await Service.findByIdAndDelete(serviceID);
		res.redirect('/admin/services/all');
	} catch (error) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

//------------- Job Controller

//------ get
export const getAllJobs = async (req, res) => {
	try {
		const jobs = await Job.find();
		res.render('admin/index', {
			content: './all-jobs',
			path: '/jobs/all',
			pageTitle: 'Manage Your Job Listing',
			jobs: jobs,
		});
	} catch (error) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const getAddJob = (req, res) => {
	res.render('admin/index', {
		content: './job-form',
		pageTitle: 'Admin Panel',
		path: '/job/add',
		editing: false,
	});
};

export const getEditJob = async (req, res) => {
	const editMode = req.query.edit;
	if (!editMode) {
		res.redirect('/admin');
	}
	try {
		const jobID = req.params.jobID;
		const job = await Job.findById(jobID);
		res.render('admin/index', {
			content: './job-form',
			editing: editMode,
			path: '/job/add',
			pageTitle: 'Edit Your Job Listing',
			jobInfo: job,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

//------ post

export const postAddJob = async (req, res) => {
	const title = req.body.title;
	const price = req.body.price;
	const description = req.body.description;
	const tag = req.body.tag;

	const job = new Job({ title, tag, price, description });

	try {
		await job.save();
		res.redirect('/admin/jobs/all');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const postEditJob = async (req, res) => {
	try {
		const jobID = req.body.jobID;
		const updatedTitle = req.body.title;
		const updatedPrice = req.body.price;
		const updatedDescription = req.body.description;
		const updatedTag = req.body.tag;

		const job = await Job.findById(jobID);

		if (!job) {
			return res.status(404).send('Job not found');
		}

		job.title = updatedTitle;
		job.price = updatedPrice;
		job.description = updatedDescription;
		job.tag = updatedTag;

		await job.save();
		res.redirect('/admin/jobs/all');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const deleteJob = async (req, res) => {
	try {
		const jobID = req.body.jobID;
		await Job.findByIdAndDelete(jobID);
		res.redirect('/admin/jobs/all');
	} catch (error) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};