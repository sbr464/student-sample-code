var mongoose = require('mongoose')

// lightweight schema (object literal)
// var Link = mongoose.model('Link', {
// 	url: String,
// 	description: String,
// 	rank: Number
// })

// full schema constructor
var Link = mongoose.model('Link', new mongoose.Schema({
	url: String,
	description: String,
	rank: {
		type: Number,
		default: 0
	}
}))

// export the model constructor
module.exports = Link
