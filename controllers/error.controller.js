export const error = (req, res) => {
	res.status(404).render('errors/404', {
		pageTitle: '404 Page Not Found',
		isAuth: req.session.isLoggedIn,
	});
};
