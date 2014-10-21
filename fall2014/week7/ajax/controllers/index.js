// SERVER SIDE ONLY
var indexController = {
	// Homepage rendering method
	index: function(req, res) {
		res.render('index');
	},

	// Send a random number to the client
	getNumber: function(req, res){
		// Use count if specified, otherwise
		// default to 1 number
		var count = req.query.count || 1;
		
		// If the count is 1, only send back
		// one result
		if(count === 1){
			res.send({
				number: Math.random() * 100000
			});
		} else {
			// If the count is not 1,
			// build an array of random number objects
			// and send that as the response instead
			var numArray = [];
			for (var i = 0; i < count; i++) {
				// For the requested count,
				// push that number of items into the array
				numArray.push({
					number: Math.random() * 100000
				});
			};

			// Send the resulting array to the client
			res.send(numArray);
		}
	}
};

// Make this available to app.js (or anything else that
// "requires" it)
module.exports = indexController;