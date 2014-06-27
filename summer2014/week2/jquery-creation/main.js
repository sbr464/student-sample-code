$(document).on('ready', function() {

  // loop over each 'li'
  $('li').each(function(index, domElem){

  	console.log(index, domElem, $(this));

  	// Print out the index's worth of '!'
  	var exclaim = '!';
  	for(var i = 0; i < index; i++){
  		exclaim += '!';
  	}

  	// Add some exclamation points to the li
  	// that is current in the loop
  	$(this).append(exclaim);

  });


});