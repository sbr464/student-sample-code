var InventoryItemModel = require('../models/inventory-item-model.js');
var OrderItemModel = require('../models/order-item-model.js');

module.exports = {

	list: function(req, res) {
		res.send('detail');
	},
	
	detail: function(req, res) {
		res.send('detail');
	},
	
	create: function(req, res) {
		res.send('create');
	},
	
	update: function(req, res) {
		InventoryItemModel.findByIdAndUpdate(
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
	}

};