// Remove multiple classes from a jQuery element
// Usage: removeClasses($('.button'), 'btn', 'btn-warning')
// (apparently jQuery already does this... ah well...)
var removeClasses = function(el) {

	// convert the arguments object to an array, starting at index 1
	var classNames = Array.prototype.slice.call(arguments, 1);

	// loop over each specified class name
	classNames.forEach(function(name) {

		// remove the class
		el.removeClass(name)
	})

	// alternative with bind!
	// classNames.forEach(el.removeClass.bind(el));
}


