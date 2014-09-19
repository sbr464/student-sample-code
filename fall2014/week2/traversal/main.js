$(document).on('ready', function() {

	// Listen for clicks on our add-to-cart buttons
  $('.actions .add-to-cart').on('click', function(){

  	/*
  		THIS IS STRICTLY COUPLED TO THE HTML AND ANY CHANGES WILL RESULT IN
  		UNEXPECTED RESULTS AND PROBABLY CURSING...
  	 */

  	// DOM Element that fired the event
  	console.log(this);

  	// Traverse to the direct parent
  	console.log('Parent:', $(this).parent() );

  	// Traverse to the direct parent's direct parent
  	console.log('Parent\'s Parent:', $(this).parent().parent() );

  	// Traverse to the direct parent's direct parent and see its children
  	console.log('Parent\'s Parent\'s Children:', $(this).parent().parent().children() );

  	// Traverse to the direct parent's direct parent and see its children, specifically the h1
  	console.log('Parent\'s Parent\'s Child H1s:', $(this).parent().parent().children('h1') );

  	// Traverse to the direct parent's direct parent and see its children, specifically the h1, and then list all of its siblings
  	console.log('Parent\'s Parent\'s Child H1s siblings:', $(this).parent().parent().children('h1').siblings() );

  	// Separate the results since they are long
  	console.log('--------------------------------------------------');

  	/*
  		THIS IS BETTER BECAUSE IT DOESN'T RELY ON A SPECIFIC HIERARCHY...
  	 */
  		
  	// Go up the parent list until we match an element that has a class of "product"
  	console.log('Closest .product:', $(this).closest('.product') );

  	// Find the closest unique .product, then grab the h1
		console.log('Closest .product:', $(this).closest('.product').find('h1') );

		// Separate the results since they are long
  	console.log('--------------------------------------------------');

		/*
			Use caching and print out the title and the price of the item.
      This stores a reference to the result set of "closest" so that
      we don't have to query the DOM more than necessary.
		 */
		var product = $(this).closest('.product');
		var title = product.find('h1').text();
		var price = product.find('.price').text();
		console.log('PRODUCT:', title, price);
  });
	
	console.log('This from outside event handler:', this);

	// jQuery EACH method:
	// 		Essentially a loop over each element in the given result-set
	$('.product').each(function(index, element){
		console.log('each index:', index);
		console.log('each element:', element);
		console.log('each this:', this);
		$(this).find('h1').append(' Index: ' + index);
	});

});