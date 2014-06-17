var ItemModel = require('../models/product-model.js');
var OrderModel = require('../models/order-model.js');

module.exports = {

	list: function(req, res) {
		res.render('items', { 
			items: ItemModel.findAll(),
			order: OrderModel.current
		});
	},
	
	detail: function(req, res) {
		res.send('detail');
	},
	
	create: function(req, res) {

		// get the inventory item and decrement the quantity
		var productid = +req.params.productid;
		var item = ItemModel.findInventoryItem(productid);
		item.quantity--;

		// create a new order item and add it to the current order
		OrderModel.create(item.product, 1);

		// send the user back to the items page
		res.redirect('/items');
	},
	
	update: function(req, res) {
		res.send('update');
	},
	
	remove: function(req, res) {
		res.send('remove');
	}

};