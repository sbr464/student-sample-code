module.exports = {
	next: function(req, res) {
		// var location = req.query.location;
		// var method = req.query.method;
		// res.send('The location you requested is ' + location + ' and you will be going by ' + method);
		res.send({
			location: req.query.location,
			method: req.query.method
		});
	}
}