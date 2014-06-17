$(document).on('ready', function() {

	// Iterate over all h1s on the page
	$('h1').each(function	(index, element) {
		console.log(index + ':', element);
		// just for fun, let's calculate a custom
		// color for each
		var colorind = index * 2;

		// edit the item in the "loop"
		$(element)
			.text('H1: ' + index)
			.css('color', '#' + colorind + colorind + colorind);
	});

	// MAIN NAV
	$(document).on('click', 'nav li', function(){
		// add the 'active' class to the currently clicked li
		// and remove the 'active' class from the other siblings
		$(this).addClass('active').siblings().removeClass('active');
	});

  
  // MEDIA ITEMS
	$(document).on('click', '.btn-activate', function(){
		// traverse up in the DOM one level
		//  $(this).parent().addClass('active');

		var mediaItem = $(this).closest('.media-item');

		// traverse up (including self) in the DOM until selector match
		mediaItem.addClass('active');

		// traversing to closest media-item, then looking
		// within that media-item for any h1s
		mediaItem.find('h1:eq(1)').text('Active!');

		// print out the list of the mediaItem's direct descendants
		// that match '.featured'
		console.log( mediaItem.children('.featured') );
	});

});








