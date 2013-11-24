var mongoose = require('mongoose');

// simple model
var Animal = mongoose.model('Animal', { 
	// simple property: NAME:TYPE
	name: String,
	diet: String,
	babies: [Animal],
	// complex property: NAME:OPTIONS_OBJECT
	weight: {
		type: Number,
		default: function() {
			// Math.random generates a random decimel number between 0 and 1
			// Multiplying this by 8 gives us a random number between 0 and 8
			// Math.floor ensures it is an integer
			return Math.floor(2 + Math.random()*8);
		}
	},
	createdAt: {
		type: Date,
		default: function() {
			return new Date();
		}
	}
});

// implied
// module.exports = {};

// OPTION A
module.exports.Animal = Animal;
// SAME AS: exports.Animal = Animal;

// OPTION B
// OR:
// module.exports = Animal;
