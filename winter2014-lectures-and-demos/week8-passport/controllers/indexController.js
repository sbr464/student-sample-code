module.exports = {
	index: function(req, res){
		res.render('index', {
			title: 'Passport App',
			username: 'Chris'
		});
	}
};