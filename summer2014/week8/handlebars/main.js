$(document).on('ready', function() {
  
	// Grab the template source from the html script-tag
	var templateSource = $('#my-template').html();
	console.log('Template Source:', templateSource);

	// Compile a handlebars template
	var myTemplate = Handlebars.compile(templateSource);
	// Handlebars.compile takes in a string of HTML
	// and gives back a function
	console.log('MyTemplate:', myTemplate);


	// Generate a context (lookup table) for Handlebars to use
	var context = {
		title: 'Using Handlebars!',
		message: 'This is a message from Javascript'
	};

	// Run the template function and append the output
	// to the html dom. Pass an object literal that represents
	// all the variables that handlebars should have access to.
	var output = myTemplate( context );
	console.log('Output:', output);

	// Use jQuery to append the output string of html
	// to the dom
	$('body').append(output);


	// Render another myTemplate to the page
	var context2 = {
		title: 'This is from 2',
		message: 'Hello, world, from template v2'
	};

	// Short-hand. Skipping the intermediate HTML string variable
	$('body').append( myTemplate( context2 ) );



	// List out our favorite games!
	
	// Starter dataset
	var games = [
		{title: 'Braid', platform: 'all', price: '$5.00'},
		{title: 'HalfLife', platform: 'pc'},
		{title: 'System Shock 2', platform: 'pc', price: '$10.99'}
	];

	// Pre-compile the template
	var gameItemSource = $('#item-template').html();
	var gameItemTemplate = Handlebars.compile(gameItemSource);

	// Loop through all the games in the array
	for (var i = 0; i < games.length; i++) {
		// Run the template function with 
		// each item separately as a context
		$('#games-list').append( gameItemTemplate( games[i] ) );
	};


	// Use helper to render the whole list of games...
	var gameHelperSource = $('#helper-template').html();
	var gameHelperTemplate = Handlebars.compile(gameHelperSource);

	// Pass the "games" array to the template function so that
	// handlebars has direct access to the whole array.
	// Then append the output to our HTML div
	$('#games-list-helper').append( gameHelperTemplate(
		{games: games}
	));

});













