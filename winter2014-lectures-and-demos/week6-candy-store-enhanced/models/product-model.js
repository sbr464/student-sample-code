var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: Number,
	description: String
});

ProductSchema.options.toObject = {
	transform: function (doc, ret, options) {
	  ret._id = ret._id.toString();
	}
};

var ProductModel = module.exports = mongoose.model('product', ProductSchema);
