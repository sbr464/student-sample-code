var ItemInventoryModel = require('../models/inventory-item-model.js');
var OrderItemModel = require('../models/order-item-model.js');

module.exports = {

	list: function(req, res) {
		res.send('list');
	},
	
	detail: function(req, res) {
		res.send('detail');
	},
	
	create: function(req, res) {

		// create new order item 
		var newOrderItem = new OrderItemModel(req.body);

		// save the order item
		newOrderItem.save(function(err, data) {

			// error handling
			if(err) {
				console.log(err);
				return res.send(500);
			}

			// send back quantity
		  res.send(newOrderItem);
		});
	},
	
	update: function(req, res) {
		res.send('update');
	},
	
	remove: function(req, res) {
		res.send('remove');
	}

};