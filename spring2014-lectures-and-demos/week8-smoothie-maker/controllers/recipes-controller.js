var mongoose = require('mongoose');
var Recipe = require('../models/recipe-model.js');

var recipesController = {
	list: function(req, res) {
	  Recipe.find({}, function(err, data) {
	    if(err) { return new Error(err); }
	    res.send(data);
	  })
	}
};

module.exports = recipesController;