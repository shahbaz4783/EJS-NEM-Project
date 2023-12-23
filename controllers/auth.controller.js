import service from '../models/Service.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const getLoginForm = (req, res) => {
	res.render('index', {
		path: '/login',
		content: './auth/login',
		pageTitle: 'Login to Your Account',
		isAuth: false,
	});
};

export const getRegisterForm = (req, res) => {
	res.render('index', {
		path: '/login',
		content: './auth/register',
		pageTitle: 'Create Your Your Account',
		isAuth: false,
	});
};

export const postNewUser = async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	try {
		const existingUser = await User.findOne({ email: email });
		if (existingUser) {
			res.status(400).json({ error: 'Email already exists' });
		} else {
			const saltRounds = 10;
			const hashedPassword = await bcrypt.hash(password, saltRounds);

			const newUser = new User({
				name: name,
				email: email,
				password: hashedPassword,
				cart: { service: [] },
			});
			await newUser.save();
			res.redirect('/login');
		}
	} catch (error) {
		console.log(error);
	}
};

export const postLogin = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;

		const user = await User.findOne({ email: email });

		if (user) {
			const passwordMatch = await bcrypt.compare(password, user.password);
			if (passwordMatch) {
				req.session.isLoggedIn = true;
				req.session.user = user;
				res.redirect('/');
			} else {
				res.status(401).send('Your Email or Password is Incorrect');
			}
		} else {
			res.status(404).send('User not found on database');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};

export const postLogout = (req, res) => {
	req.session.destroy(() => {
		res.redirect('/');
	});
};
