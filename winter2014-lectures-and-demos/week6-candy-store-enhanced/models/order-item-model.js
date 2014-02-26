var mongoose = require('mongoose');

var oldDefaultOptions = mongoose.Schema.prototype.defaultOptions;
mongoose.Schema.prototype.defaultOptions = function() {
	var options = oldDefaultOptions();
	options.toObject = {
		transform: function (doc, ret, options) {
		  ret._id = ret._id.toString();
		  ret.product._id = ret.product._id.toString();
		}
	};
	return options;
};

var OrderItemSchema = new mongoose.Schema({
	product: Object,
	quantity: Number,
	gift: {
		type: Boolean,
		default: false
	}
});

var OrderItemModel = module.exports = mongoose.model('order-item', OrderItemSchema);
