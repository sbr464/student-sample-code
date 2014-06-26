// Set up a counter... in the global scope (for testing)
var counter = 0;

$(document).on('ready', function() {
  console.log('hello world from on.ready');

  // listen for click events on <button>
  $('button').on('click', function(){
  	// Test functionality with a console log
  	console.log('hello from button.click', counter);

  	// When a button is clicked, increase counter by 1
  	counter++;
  });

  // listen for clicks on #my-button

  // This is the normal style for attaching a listener/handler
  // $('#my-button').on('click', function(){
  $('#my-button').click(function(eventArgs){
  	// print out all the arguments passed to this function
  	console.log(arguments);

  	// print out the named alias for the first argument
  	console.log(eventArgs);
  });


  // Prevent anchor tags from navigating
  $('a').on('click', function(e){
  	console.log('clicked an anchor tag');

  	// "this" refers to the DOM element that was clicked
  	console.log(this);

  	// We can convert that DOM element into a jQuery object
  	//  by passing it to the $()
  	$(this).css('color', 'red');
  	$(this).text('Clicked!');

  	// Event-way to prevent the default behavior
  	// 	Like navigating to a page when clicking an <a> tag
  	e.preventDefault();

  	// Does the same thing as e.preventDefault(), but
  	// 	this is handled in jQuery-world.
  	return false;
  });

});














