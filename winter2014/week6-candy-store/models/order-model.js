var ModelHelper = require('./model-helper.js');

var OrderItem = function(product, quantity, gift) {
	this.id = this.constructor.auto();
	this.product = product;
	this.quantity = quantity;
	this.gift = gift || false;
};
OrderItem.auto = ModelHelper.createAutoIncrementer();

var currentOrder = {
	items: []
};

module.exports = {
	current: currentOrder,
	create: function(product, quantity, gift) {
		var newOrderItem = new OrderItem(product, quantity, gift);
		currentOrder.items.push(newOrderItem);
	}
};
