var mongoose = require('mongoose');

var Ingredient = mongoose.model('ingredient', {
	name: String,
	image: String
})

module.exports = Ingredient
