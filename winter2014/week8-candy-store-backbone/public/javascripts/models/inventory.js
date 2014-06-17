var InventoryCollection = Backbone.Collection.extend({
	model: InventoryItemModel,
	url: '/inventory'
});