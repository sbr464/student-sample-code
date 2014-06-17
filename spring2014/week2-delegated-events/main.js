$(document).on('ready', function() {

	// Listen for clicks on a button
	// NON-DELEGATED LISTENER
	/*
  $('button').on('click', function(){
  	console.log( $(this).text() );
  });
	*/

	// DELEGATED VERSION
	$(document).on('click', 'button', function(){
		console.log( $(this).text() );
	});
	

  // Add a new button
  $('body').append('<button>Button 3</button>');

});