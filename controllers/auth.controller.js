import User from '../models/User.js';

export const getLoginForm = (req, res) => {
//   const cookie = req.get('Cookie');
//   const isLoggedIn = cookie ? cookie.trim().split('=')[1] : false;

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

export const postLogin = (req, res) => {
		User.findById('6575a0bc68760ac68114641a')
			.then((user) => {
				req.session.isLoggedIn = true;
				req.session.user = user;
				res.redirect('/');
			})
			.catch((err) => console.log(err));
};

export const postLogout = (req, res) => {
	req.session.destroy(() => {
		res.redirect('/')
	})
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
