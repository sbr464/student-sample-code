var Bird = require('../models/bird.js');

// This is our API controller for the birds.
// It will allow users to make CRUD-based operations
// such as those found in Backbone.
var flightController = {

	// This will be a post request for adding
	// a brand new bird to the collection
	addBird: function(req, res){
		// Get the submitted data
		var birdData = req.body;

		// Create a new bird from the given data
		var bird = new Bird(birdData);

		// Save the new bird to the DB
		bird.save(function(err, bird){
			// Send back the saved bird so that
			// backbone can update its local information
			res.send(bird);
		});
	},

	// Handle requests for deleting a bird
	deleteBird: function(req, res){
		// Get the bird ID from the url (found in app.js)
		var birdId = req.params.id;

		// Remove the bird by ID from the DB
		Bird.remove({_id: birdId}, function(err, results){
			// Just send back an empty success message
			res.sendStatus(200);
		});
	}
};

module.exports = flightController;