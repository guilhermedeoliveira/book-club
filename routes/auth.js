module.exports = app => {
	app.get('/', (req, res) => {
		res.send({ hello: 'World!' });
	});

	app.get('/auth/google', (req, res) => {});
};
