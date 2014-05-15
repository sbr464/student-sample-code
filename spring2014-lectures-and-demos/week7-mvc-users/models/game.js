var mongoose = require('mongoose');

var Game = mongoose.model('game', {
	title: String
});

module.exports = Game;