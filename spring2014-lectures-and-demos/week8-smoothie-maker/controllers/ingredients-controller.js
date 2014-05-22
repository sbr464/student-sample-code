var mongoose = require('mongoose');
var Ingredient = require('../models/ingredient-model.js');

var ingredientsController = {

	create: function() {},

	read: function(req, res) {
	  Ingredient.find({}, function(err, data) {
	    if(err) { return new Error(err); }
	    res.send(data);
	  })
	},
	
	update: function() {},
	delete: function() {},

};

module.exports = ingredientsController;