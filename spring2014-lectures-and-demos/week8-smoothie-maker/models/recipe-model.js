var mongoose = require('mongoose');

var Recipe = mongoose.model('recipe', {
	name: String,
	ingredients: [String]
});

module.exports = Recipe;