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

export const getAllService = (req, res) => {
	res.render('admin/index', {
		content: 'admin/index',
		pageTitle: 'Admin Panel',
		path: '/service/all',
	});
};
