$(function() {

	$(document).on('click', '.item-add', function() {

		var itemEl = $(this).closest('.item');

		// get the item's product id
	  var id = itemEl.attr('data-id');

	  // request that the item is added to the current order
	  $.post('/order/add/' + id, function(data) {

	  	// update the inventory item quantity
	    itemEl.find('.item-quantity').text(data.quantity);

	    // update the shopping cart
	    console.log(data);

	  });

	});

});