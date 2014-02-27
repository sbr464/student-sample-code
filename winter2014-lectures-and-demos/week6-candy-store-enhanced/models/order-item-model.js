var mongoose = require('mongoose');

var OrderItemSchema = new mongoose.Schema({
	product: Object,
	quantity: Number,
	gift: {
		type: Boolean,
		default: false
	}
});

var OrderItemModel = module.exports = mongoose.model('order-item', OrderItemSchema);
