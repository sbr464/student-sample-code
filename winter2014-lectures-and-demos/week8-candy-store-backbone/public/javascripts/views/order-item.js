var OrderItemView = Backbone.View.extend({

	initialize: function(model) {
		this.model = model;
		this.listenTo(model, 'change', this.render);
	},

	render: function() {
		var orderItemEl = $('#order-item-template > *:first').clone();
		orderItemEl.find('.name').text(this.model.get('product').name);
		orderItemEl.find('.quantity').text(this.model.get('quantity'));
		this.$el.empty().append(orderItemEl);
		return this;
	}

});