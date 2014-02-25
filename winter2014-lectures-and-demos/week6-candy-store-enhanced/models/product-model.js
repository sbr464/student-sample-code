var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: Number,
	description: String
});

var ProductModel = module.exports = mongoose.model('product', ProductSchema);
