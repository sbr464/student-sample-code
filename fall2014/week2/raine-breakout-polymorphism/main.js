$
jQuery

"polymorphic"

1. selecting elements
	$('p') // select all paragraphs

2. creating elements

	var className = 'active';

	var p = $('<p>'); // create a new paragraph elements
	p.addClass(className);
	p.append('<b>');
	p.text('Hi');
		
	// chaining
	var p = $('<p>') // create a new paragraph elements
		.addClass(className)
		.append('<b>')
		.text('Hi');

	var p = $('<p>').addClass(className).append('<b>').text('Hi');

	$('body').append(p)

	$('body').append('<p class="' + className + '"></p>')

3. wrapping native elements (in order to perform jQuery functionality)

	$(document.body.firstChild.childNodes[1]).addClass('active')
	$(this).addClass('active')

	// MISTAKE
	var list = $('<ul><li>a</li><li>b</li><li>c</li></ul>');
	// $(list).addClass('flat');
	list.addClass('flat');


// In jQuery, this refers to the native element that fired the event (only valid in an event handler)



// Organizing your code

1. global variables (WARNING!)
2. helper functions
3. business logic functions

$(document).ready({
	4. event handlers
	5. main
})
