export const isAuth = (req, res, next) => {
	if (!req.session.isLoggedIn) {
		return res.redirect('/login');
	}
	next();
};

export const redirectIfLoggedIn = (req, res, next) => {
	if (req.session.isLoggedIn) {
		return res.redirect('/');
	}
	next();
};