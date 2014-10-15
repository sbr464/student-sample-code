// Load in the model
var desserts = require('../models/desserts.js');

var apiController = {
	addDessert: function(req, res){
		// pull out the submitted form data...
		var data = req.body;

		// We can just send the data back so the
		// user can see the raw form data
		// res.send(data);

		// Just print the loaded data to console
		console.log(data);
		
		// Add our new dessert to the set
		desserts.push(data);

		// Send the user back to the home page
		res.redirect('/');
	}
};

module.exports = apiController;