import User from '../models/User.js';

export const getLoginForm = (req, res) => {
  const cookie = req.get('Cookie');
  const isLoggedIn = cookie ? cookie.trim().split('=')[1] : false;

  res.render('index', {
    path: '/login',
    content: './auth/login',
    pageTitle: 'Login to Your Account',
    isAuth: isLoggedIn,
  });
};

export const getRegisterForm = (req, res) => {
	res.render('index', {
		path: '/login',
		content: './auth/register',
		pageTitle: 'Create Your Your Account',
		isAuth: req.isLoggedIn,
	});
};

export const postLogin = (req, res) => {
	req.session.isLoggedIn = true;
	res.redirect('/');
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
