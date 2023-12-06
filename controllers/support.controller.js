export const getSupportPage = (req, res) => {
    res.render('index', {
			pageTitle: 'Support - SkillHub Connect',
			content: 'support/index',
		});
}