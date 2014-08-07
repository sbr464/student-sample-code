$(document).on('ready', function() {

	db.Pastry.find(function(error, pastries) {

		// create the store view
		var storePastries = new Order(pastries)
		var storeView = new OrderView({
			collection: storePastries,
			options: {
				heading: 'Pastries'
			}
		})

		// when a pastry is clicked in the storefront, add it to the shopping cart
		storeView.on('choose', function(pastry) {
			
			order.add(pastry)

		})

		// render the storefront
		storeView.render()
		$('#storefront').append(storeView.$el)

		// create the order collection
		var order = new Order()

		// render the order
		var shoppingCart = new OrderView({
			collection: order,
			options: {
				heading: 'Your Order'
			}
		})
		shoppingCart.render()
		$('#shopping-cart').append(shoppingCart.$el)

	})
  
});