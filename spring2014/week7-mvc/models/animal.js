var mongoose = require('mongoose');

// mongoose.model creates a constructor
// first arg: the singular of the collection name
// second arg: the schema (an object specifying the properties that will be defined for each document in this collection)
// create one model for each collection
var Animal = mongoose.model('animal', {
	name: String,
	diet: String,
	age: Number
});

// export the Animal model
module.exports = Animal;