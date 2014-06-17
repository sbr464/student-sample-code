var EntertainerModel = require('../models/entertainer.js')

var ClownController = module.exports = {

	list: function(req, res) {
	  
	  // find all clowns in the database
		EntertainerModel.find({}, function(err, docs) {
			// and send them to the view to be rendered
			res.render('entertainers', {
				entertainers: docs
			});
		});
	},

	save: function(req, res) {

		// create a new document
		var newEntertainer = new EntertainerModel({
			name: req.params.name,
			age: 80,
			job: 'clown'
		});

		// save the document to the database
		newEntertainer.save(function(err, data) {
			// and send a response back to the client
		  res.send('clown created');
		});
	},

	remove: function(req, res) {
	  
		EntertainerModel.remove(
			{ name: req.params.name },
			function(err, data) {
			  res.send('Clown removed! ' + data)
			}
		);

	}
};
