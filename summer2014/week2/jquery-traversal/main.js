$(document).on('ready', function() {
  $('li').on('click', function(){
  	console.log( $(this) );

  	// Set the color of the clicked 'li' to red
  	$(this).css('color', 'red');

  	// Traverse from the current 'li' upwards to
  	// find the closest matching '.container'
  	// and set its background color to blue
  	// and padding to 20px
  	$(this).closest('.container').css({
  		'background': 'blue',
  		'padding': 20
  	});

  	// Traverse up to find the closest '.container',
  	// then traverse downwards to find any '.featured' items
  	// and set the background of any results to green
  	$(this).closest('.container').find('.featured').css({
  		'background': 'green'
  	});
  });
});







