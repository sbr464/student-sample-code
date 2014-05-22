var mongoose = require('mongoose');
var Recipe = require('../models/recipe-model.js');

var recipesController = {

	create: function(req, res) {
	  var recipe = new Recipe(req.body);
	  recipe.save(function(err, data) {
	    if(err) { return new Error(err); }
	    res.send(data);
	  })
	},

	read: function(req, res) {
	  Recipe.find({}, function(err, data) {
	    if(err) { return new Error(err); }
	    res.send(data);
	  })
	},

	update: function() {},
	delete: function() {},

};

module.exports = recipesController;