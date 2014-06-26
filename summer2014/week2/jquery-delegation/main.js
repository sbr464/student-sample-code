$(document).on('ready', function() {

	// Delegating events helps to handle the situation
	// where we are dynamically creating new elements on
	// the page. A delegated event DELAYS the selector
	// (i.e. "button") until click time as opposed to running
	// the selector when the page is loaded.
  
  // Basic behind-the-scenes of a delegated event
	/*$(document).on('click', function(eventArgs){
		var targ = $(eventArgs.target);
		console.log(eventArgs.target);
		if(targ.text() === 'Something cool'){
			console.log('That\'s so cool....');
		}
	});*/

	// Delegated event handler for all buttons
	// Original:
	// $('button').on('click', function(){});
	// Delegated:
	$(document).on('click', 'button', function(){
		// Log the text value of the currently clicked element
		console.log( $(this).text() );
	});

	// If the element has .my-class, redirect to refactoru.com
	$(document).on('click', '.my-class', function(){
		window.location.href = 'http://refactoru.com';
	});

	// USING A PRE-DEFINED FUNCTION AS THE HANDLER
	// preset the event handler method and then pass it to
	//  the listener
	var onButtonClick = function(eventArgs) {
		console.log(eventArgs);
	}

	// Attach the listener and pass a REFERENCE to the function
	$('button').on('click', onButtonClick);

});












