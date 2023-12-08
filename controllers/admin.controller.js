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
	if (!editMode) {
		res.redirect('/');
	}
	try {
		const editMode = req.query.edit;
		const editService = await User.findByID(editMode);
		res.render('admin/index', {
			editing: editMode,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

export const postEditService = async (req, res) => {
	try {
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};