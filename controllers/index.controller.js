export const getIndexPage = (req, res) => {
    res.render('index', {
			pageTitle: 'Home - SkillHub Connect',
			content: 'home/index',
		});
};