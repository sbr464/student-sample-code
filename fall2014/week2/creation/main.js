$(document).on('ready', function() {
  
	// Generate a new paragraph element via jQuery
	var newElement = $('<p>Hello from JS</p>');
	
	// Append the new element to our h1
	$('h1').append(newElement);

	// Prepend the same element now to the h1
	$('h1').prepend(newElement);

	// Add this element BEFORE the targetted selector in the dom
	$('h1').before(newElement);

	// Add this element AFTER the targetted selector in the dom
	$('h1').after(newElement);

	// Clone the given element (create a copy)
	var otherElement = newElement.clone();
	$('h1').before(otherElement);

	// Remove all children from the UL. This will still keep the ul,
	// but removes all elements contained within
	$('ul').empty();

	// Get rid of the h1 now. Will remove the given element as well
	// as all its children and so on...
	$('h1').remove();
});