var mongoose = require('mongoose');

// Create the user model
var User = mongoose.model(
	'user',
	{
		name: String,
		skills: [String],
		// this is a generic objectid array
		friends: [mongoose.Schema.ObjectId],
		// this is a generic objectid array
		// (with intent of accessing the games collection)
		games: [mongoose.Schema.ObjectId]
	}
);

// Export to application
module.exports = User;