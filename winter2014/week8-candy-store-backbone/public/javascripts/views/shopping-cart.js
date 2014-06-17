var ShoppingCartView = Backbone.View.extend({

	initialize: function(collection) {
		this.collection = collection;
		// this.listenTo(collection, 'change', this.render);
		// this.listenTo(collection, 'add', this.render);
		// this.listenTo(collection, 'remove', this.render);
		this.listenTo(collection, 'all', this.render);
	},

	render: function() {
		var shoppingCartEl = $('#shopping-cart-template > *:first').clone();
		shoppingCartEl.find('.order-items').append(this.collection.models.map(function(model) {
			return (new OrderItemView(model)).render().$el;
		}));
		this.$el.empty().append(shoppingCartEl);
	}

});