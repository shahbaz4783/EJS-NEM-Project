import Job from '../models/Job.js';
import Service from '../models/Service.js';

export const getAllServices = async (req, res) => {
	try {
		const allServices = await Service.find();
		res.render('index', {
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
			content: './services/service-details',
			servicesInfo: serviceDetails,
			pageTitle: serviceDetails.title,
		});
        console.log(serviceID)
	} catch (error) {
		console.log(error);
	}
};

export const getAllJobs = async (req, res) => {
	try {
		const allJobs = await Job.find();
		res.render('index', {
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
			content: './jobs/job-details',
			servicesInfo: jobDetails,
			pageTitle: jobDetails.title,
		});
		console.log(jobID);
	} catch (error) {
		console.log(error);
	}
};