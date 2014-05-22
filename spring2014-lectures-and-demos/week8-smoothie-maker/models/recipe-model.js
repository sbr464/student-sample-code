var mongoose = require('mongoose');

var Recipe = mongoose.model('recipe', {
	name: String,
	ingredients: []
});

module.exports = Recipe;