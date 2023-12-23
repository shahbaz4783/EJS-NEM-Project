export const getSupportPage = (req, res) => {
    res.render('index', {
			path: '/support',
			pageTitle: 'Support - SkillHub Connect',
			content: 'support/index',
			isAuth: req.session.isLoggedIn,
		});
}