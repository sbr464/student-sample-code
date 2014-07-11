var ShoppingCart = function() {
	this.items = [];
	this.inventory = 100;

	// fixing context with bind
	// (if we don't, checkInventory will have its context set to 'window' because setInterval invokes it without a host object)
	setInterval(this.checkInventory.bind(this), 1000);

	// fixing context with closure
	// var self = this;
	// setInterval(
	// 	self.checkInventory();
	// }, 1000)
}
ShoppingCart.prototype.checkInventory = function() {
	console.log('Inventory: ', this.inventory);
}

var cart = new ShoppingCart();