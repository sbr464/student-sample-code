var Bird = require('../models/bird.js');

var indexController = {
	index: function(req, res) {
		// When rendering the home page,
		// we want to bootstrap the list of birds
		// from the database, so we'll run a find
		// to get all birds
		Bird.find({}, function(err, birds){
			// Render the index.jade file and give
			// it access to the "birds" array from
			// our "find" call
			res.render('index', {
				birds: birds
			});
		});
	}
};

module.exports = indexController;