import User from '../models/User.js';

export const getLoginForm = (req, res) => {
	res.render('index', {
		content: './auth/login',
		pageTitle: 'Login to Your Account',
	});
};

export const getRegisterForm = (req, res) => {
	res.render('index', {
		content: './auth/register',
		pageTitle: 'Create Your Your Account',
	});
};

export const postNewUser = async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const newUser = new User({ name, email, password });
	try {
		await newUser.save();
		res.redirect('/');

	} catch (error) {
		console.log(error);
	}
};
