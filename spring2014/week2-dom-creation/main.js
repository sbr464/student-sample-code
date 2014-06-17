$(document).on('ready', function() {
  
	$('body').append('<ul id="test"></ul>');

	var games = ['Braid', 'Swapper', 'Project Zomboid'];

	for (var i = 0; i < games.length; i++) {

		$('#test').append('<li>' + games[i] + '</li>');

	};

	// using clone
	var newGameUL = $('#test').clone();
	newGameUL.append('<li>This is a clone</li>');
	newGameUL.css('backgroundColor', '#F00');

	$('body').append(newGameUL);

	// using the power of $()
	var newElement = $('<h1>Here is an H1</h1>');
	newElement.css('color', '#F00');
	$('body').prepend(newElement);

});


// $(document).on('ready', function(){})
// $(document).ready(function(){})
// $(function(){})














