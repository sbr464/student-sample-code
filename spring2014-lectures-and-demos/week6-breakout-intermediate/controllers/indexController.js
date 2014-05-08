module.exports = {
	home: function(req, res) {
		res.render('index', {
			theme: 'test'
		});
	}
}