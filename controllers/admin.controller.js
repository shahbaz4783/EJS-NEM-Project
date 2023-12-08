import Service from '../models/Service.js';

export const getDashboard = (req, res) => {
	res.render('admin/index', {
		content: 'admin/index',
		pageTitle: 'Admin Panel',
		path: '/',
	});
};

export const getAddService = (req, res) => {
	res.render('admin/index', {
		content: 'admin/index',
		pageTitle: 'Admin Panel',
		path: '/service/add',
		editing: false,
	});
};

export const postAddService = async (req, res) => {
	const title = req.body.title;
	const price = req.body.price;
	const description = req.body.description;
	const tag = req.body.tag;

	const service = new Service({ title, tag, price, description });
	try {
		const result = await service.save();
		console.log(result);
		res.redirect('/');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const getAllService = async (req, res) => {
	try {
		const services = await Service.find();
		console.log(services);
		res.render('admin/index', {
			content: 'admin/index',
			pageTitle: 'Admin Panel',
			path: '/service/all',
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
		res.redirect('/');
	}
	try {
		const serviceID = req.params.serviceID;
		const service = await Service.findById(serviceID);
		res.render('admin/index', {
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

		const updatedService = await service.save();

		console.log(updatedService);
		res.redirect('/admin/service/all');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const deleteService = async (req, res) => {
	try {
		const serviceID = req.body.serviceID;
		await Service.findByIdAndDelete(serviceID);
        res.redirect('/admin/service/all')
	} catch (error) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};