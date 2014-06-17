var models = {
};

$(function() {

	models.shoppingCart = new ShoppingCartCollection();
	models.shoppingCart.reset(order);

	var shoppingCartView = new ShoppingCartView(models.shoppingCart);
	shoppingCartView.$el = $('#shopping-cart');
	shoppingCartView.render();

	models.inventory = new InventoryCollection();
	models.inventory.reset(inventoryItems);

	var inventoryView = new InventoryView(models.inventory);
	inventoryView.$el = $('#inventory');
	inventoryView.render();

});