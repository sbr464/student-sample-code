if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

/** Returns a random item from the given array. */
var randomItem = function(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

$(function() {
// Same as: $(document).ready(function() {

	var messages = ['hi', 'yo', 'bye', 'okay', 'no'];
	// Special escaped characters:
	// \n line break
	// \t tab

	// attach a click handler to all elements with the class 'sender'
	$('.sender').on('click', function() {

		// select a random item from the messages array
		var message = randomItem(messages);

		var colorClass = $(this).data('color-class');
		// Same as: var colorClass = $(this).attr('data-color-class');

		// create a new link element with the same color as the clicked button
		// use supplant to insert the color class and message into the html string
		// pass the html string to the jQuery function to create a new element
		var messageEl = $('<a href="#" class="message btn btn-default {0}">{1}</a>'.supplant([colorClass, message]));

		// Three different ways to use append:
		// 1. $('#messages').append('test')
		// 2. $('#messages').append('<h1>hello</h1>')
		// 3. var myEl = '<ul><li>okay</li></ul>';
		//    $('#messages').append(myEl);

		// add the newly created element to the element with id messages
		$('#messages').append(messageEl);

	});

});
