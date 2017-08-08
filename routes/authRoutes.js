const passport = require('passport');

module.exports = app => {
	app.get('/', (req, res) => {
		res.send({ hello: 'World!' });
	});

	/** GOOGLE */
	// Route - Enter Google OAuth flow
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// Route - Callback returning from Google OAuth flow
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => res.redirect('/feed')
	);

	/** FACEBOOK */
	// Route - Enter Facebook OAuth flow
	app.get(
		'/auth/facebook',
		passport.authenticate('facebook', {
			scope: ['public_profile', 'email']
		})
	);

	// Route - Callback returning from Facebook OAuth flow
	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook'),
		(req, res) => res.redirect('/feed')
	);

	// Route - Current_user information
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	// Route - Logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};
