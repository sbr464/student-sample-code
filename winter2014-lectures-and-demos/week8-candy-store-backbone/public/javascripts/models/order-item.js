var OrderItemModel = Backbone.Model.extend({
	idAttribute: '_id',
	url: '/order',
	increase: function(n) {
		n = n || 1;
		this.set('quantity', this.get('quantity') + n);
	}
});