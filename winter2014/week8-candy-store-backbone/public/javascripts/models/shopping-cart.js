var ShoppingCartCollection = Backbone.Collection.extend({
	model: OrderItemModel,
	url: '/items'
});