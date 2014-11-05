var mongoose = require('mongoose');

// This is our server-side (mongo) schema
// for any bird that is persisted to the DB
var birdSchema = mongoose.Schema({
	name: String,
	isFlightless: Boolean,
	edible: Boolean,
	image: String
});

module.exports = mongoose.model('bird', birdSchema);