export const getIndexPage = (req, res) => {
    res.render('index', {
			path: '/',
			pageTitle: 'Home - SkillHub Connect',
			content: 'home/index',
			isAuth: req.session.isLoggedIn,
		});
};