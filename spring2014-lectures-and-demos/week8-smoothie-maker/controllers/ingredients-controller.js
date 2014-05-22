var mongoose = require('mongoose');
var Ingredient = require('../models/ingredient-model.js');

var ingredientsController = {
	list: function(req, res) {
	  Ingredient.find({}, function(err, data) {
	    if(err) { return new Error(err); }
	    res.send(data);
	  })
	}
};

module.exports = ingredientsController;