$(document).ready(function() {

	// $('#first').css('background-color', 'peachpuff');
	$('#first').text('GO!');
	// $(SELECTOR).METHOD(PARAMETERS);

	// Common browser events
	// click, keydown, scroll, mouseover, blur, focus

	// Callback: A function that you defined, that the
	// system calls for you.

	// Event Handler: A callback that specifically is 
	// called in response to a event.

	// 1. passing a named function as an argument
	var firstClick = function() {
		alert('Go Go Go!');
	};
	// $('#first').on('click', firstClick);

	// 2. passing an anonymous function as an argument
	// $('#second').on('click', function() {
		// alert("I'm second in line.");
	// });

	// shortcut (not recommended, but common online)
	// $('#third').click(function() {
		// alert("I'm third in line... bummer.");
	// });


	$('.button').on('click', function() {
		// this (*inside a jQuery event handler*) refer to the element of the event
		$(this).toggleClass('active');
		console.log($(this));

		// this, on its own (natively), refers to the context of the current scope
	});

});

