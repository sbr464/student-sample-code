var mongoose = require('mongoose');
var Recipe = require('../models/recipe-model.js');
var Ingredient = require('../models/ingredient-model.js');

var recipesController = {

	create: function(req, res) {
		var recipe = new Recipe(req.body);
		recipe.save(function(err, data) {
			if(err) { return console.error(err); }
			res.send(data);
		})
	},

	read: function(req, res) {
		Recipe.find({}, function(err, data) {
			if(err) { return console.error(err); }
			res.send(data);
		})
	},

	update: function(req, res) {
	  Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
	    if(err) { return console.error(err); }
	    res.send(data);
	  })
	},

	delete: function(req, res) {
	  Recipe.findByIdAndRemove(req.params.id, function(err, data) {
	    if(err) { return console.error(err); }
	    res.send(data);
	  })
	},

};

module.exports = recipesController;