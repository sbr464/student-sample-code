var ItemInventoryModel = require('../models/inventory-item-model.js');
var OrderItemModel = require('../models/order-item-model.js');

module.exports = {

	list: function(req, res) {

		// get all inventory items
		ItemInventoryModel.find({}, function(err, inventoryItems) {
		  if(err) return console.log(err);

		  // get all order items
		  OrderItemModel.find({}, function(err, orderItems) {
			  if(err) return console.log(err);

		    // render the items view
				res.render('items', { 
					inventoryItems: inventoryItems,
					order: orderItems
				});
		  })


		});

	},
	
	detail: function(req, res) {
		res.send('detail');
	},
	
	create: function(req, res) {

		// get the inventory item and decrement the quantity
		var productid = +req.params.productid;
		var item = ItemInventoryModel.findInventoryItem(productid);
		item.quantity--;

		// create a new order item and add it to the current order
		OrderItemModel.create(item.product, 1);

		// send the user back to the items page
		res.redirect('/items');
	},
	
	update: function(req, res) {
		OrderItemModel.findByIdAndUpdate(
			req.params.id, 
			{quantity: req.body.quantity}, 
			function(err, doc) {
			  if(err) {
			  	console.log(err);
			  	res.send(500, 'update failed');
			  }
			  else {
				  res.send('order item updated')
				}
			}
		);
	},
	
	remove: function(req, res) {
		res.send('remove');
	},

	/** DEV ONLY */
	populate: function(req, res) {
		ItemInventoryModel.populate();
		res.send('Items populating... please wait most patiently...')
	}

};