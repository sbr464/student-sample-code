var mongoose = require('mongoose');
var ProductModel = require('./product-model.js');

var INVENTORY_MAX = 100;

var InventoryItemSchema = new mongoose.Schema({
	product: Object,
	quantity: Number
});

InventoryItemSchema.statics.populate = function() {

	// create products
	var products = [
		new ProductModel({
			name: 'Sour Patch Kids', 
			price: 7.99, 
			description: 'Little gummy children that are sour.'
		}),
		new ProductModel({
			name: 'Mink Duds', 
			price: 25.99, 
			description: 'Furry, chocolate, caramel duds.'
		}),
		new ProductModel({
			name: 'Dots', 
			price: 4.99, 
			description: 'Dots. DO NOT BUY IF YOU HAVE BRACES. REALLY.'
		}),
		new ProductModel({
			name: 'Nerds', 
			price: 6.99, 
			description: 'Colored candy pebbles.'
		})
	];

	products
		.map(function() { return Math.floor(Math.random() * INVENTORY_MAX);  })
		.forEach(function(quantity, i) { 
			var inventoryItem = new InventoryItemModel({
				product: products[i], 
				quantity: quantity
			});
		  inventoryItem.save();
		});
};

var InventoryItemModel = module.exports = mongoose.model('inventory-item', InventoryItemSchema);