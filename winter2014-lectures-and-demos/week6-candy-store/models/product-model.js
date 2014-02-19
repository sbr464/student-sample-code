var ModelHelper = require('./model-helper.js');

var INVENTORY_MAX = 100;

var Product = function(name, price, description) {
	this.id = this.constructor.auto();
	this.name = name;
	this.price = price;
	this.description = description;
};
Product.auto = ModelHelper.createAutoIncrementer();

var InventoryItem = function(product, quantity) {
	this.id = this.constructor.auto();
	this.product = product;
	this.quantity = quantity;
};
InventoryItem.auto = ModelHelper.createAutoIncrementer();

// mock database
var products = [
	new Product('Sour Patch Kids', 7.99, 'Little gummy children that are sour.'),
	new Product('Mink Duds', 25.99, 'Furry, chocolate, caramel duds.'),
	new Product('Dots', 4.99, 'Dots. DO NOT BUY IF YOU HAVE BRACES. REALLY.'),
	new Product('Nerds', 6.99, 'Colored candy pebbles.')
];

var inventory = products
	.map(function() { return Math.floor(Math.random() * INVENTORY_MAX);  })
	.map(function(quantity, i) { return new InventoryItem(products[i], quantity) })

module.exports = {
	findAll: function() {
		return inventory.slice();
	},
	findInventoryItem: function(id) {
		return inventory.filter(function(item) {
			return item.product.id === id;
		})[0];
	}
}