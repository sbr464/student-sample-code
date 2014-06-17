var InventoryItemView = Backbone.View.extend({

	events: {
		'click .item-add' : 'add'
	},

	initialize: function(model) {
		this.model = model;
		this.listenTo(model, 'change', this.render);
	},

	add: function() {

		// decrease quantity in inventory
		this.model.set('quantity', this.model.get('quantity') - 1);
		this.model.save();

		// create new order item
		var orderItem = new OrderItemModel({
			product: this.model.get('product'),
			quantity: 1,
			gift: false
		});
		orderItem.save();

		models.shoppingCart.add(orderItem);
	},

	render: function() {
		var inventoryItemEl = $('#inventory-item-template > *:first').clone();
		inventoryItemEl.find('.item-name').text(this.model.get('product').name);
		inventoryItemEl.find('.item-price').text(this.model.get('product').price);
		inventoryItemEl.find('.item-description').text(this.model.get('product').description);
		inventoryItemEl.find('.item-quantity').text(this.model.get('quantity'));
		this.$el.empty().append(inventoryItemEl);
		return this;
	}

});