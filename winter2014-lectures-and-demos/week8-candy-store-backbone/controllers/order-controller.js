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

		// find the inventory item and decrement the quantity
		ItemInventoryModel.findByIdAndUpdate(req.params.productid, { $inc: { quantity: -1 }}, function(err, inventoryItem) {

			// error
			if(err) {
				console.log(err);
				return res.send(500);
			}

			// create new order item 
			var newOrderItem = new OrderItemModel({
				product: inventoryItem.product,
				quantity: 1
			});

			// save the order item
			newOrderItem.save(function(err, data) {

				// error handling
				if(err) {
					console.log(err);
					return res.send(500);
				}

				// send back quantity
			  res.send({
			  	quantity: inventoryItem.quantity,
			  	orderItem: newOrderItem
			  });
			})
		});

		// get the inventory item and decrement the quantity
		// var productid = +req.params.productid;
		// var item = ItemInventoryModel.findInventoryItem(productid);
		// item.quantity--;

		// // create a new order item and add it to the current order
		// OrderItemModel.create(item.product, 1);
	},
	
	update: function(req, res) {
		res.send('update');
	},
	
	remove: function(req, res) {
		res.send('remove');
	}

};