const passport = require('passport');

module.exports = app => {
	app.get('/', (req, res) => {
		res.send({ hello: 'World!' });
	});

	// Route - Enter Google OAuth flow
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// Route - Callback returning from Google OAuth flow
	app.get('/auth/google/callback', passport.authenticate('google'));
};
