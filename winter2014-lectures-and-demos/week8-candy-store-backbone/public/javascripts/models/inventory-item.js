var InventoryItemModel = Backbone.Model.extend({
	idAttribute: '_id',
	increase: function(n) {
		n = n || 1;
		this.set('quantity', this.get('quantity') + n);
	}
});