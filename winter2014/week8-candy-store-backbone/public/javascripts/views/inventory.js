var InventoryView = Backbone.View.extend({

	initialize: function(collection) {
		this.collection = collection;
	},

	render: function() {
		this.$el.empty().append(this.collection.models.map(function(model) {
			return (new InventoryItemView(model)).render().$el;
		}));
	}

});