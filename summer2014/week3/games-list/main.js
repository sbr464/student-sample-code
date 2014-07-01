// Create the base gamesList array
var gamesList = [];

// Push in a couple preliminary items.
gamesList.push({
	title: 'Braid',
	description: 'Kinda like mario but with time manipulation.'
});
gamesList.push({
	title: 'Donkey Kong',
	description: 'Play as a gorilla looking for his lost bananas.'
});

// Utility functions

/**
 * This should clear current view and update
 * with the gamesList items
 */
var renderList = function(){
	// Empty any items from view
	$('#games-ul').empty();

	// Loop through and render each game
	for (var i = 0; i < gamesList.length; i++) {
		// Create a new DOM list element
		var newListItem = $('<li>');

		// Append an h4 with the current game's title
		newListItem.append(
			'<h4>' + gamesList[i].title + '</h4>'
		);

		// Append a p with the current game's description
		newListItem.append(
			'<p>' + gamesList[i].description + '</p>'
		);

		// Create actions container
		var actionsContainer = $('<div class="actions">');
		// Append the actions container to the list item 
		actionsContainer.appendTo(newListItem);

		// Add the delete action button
		actionsContainer.append(
			'<button class="delete">Delete</button>'
		);

		// Now add this item to the list
		newListItem.prependTo('#games-ul');

		// Attach the new display object to my current
		// game object in the array
		gamesList[i].display = newListItem;

		// Attach view to list (uses an object literal
		// that jQuery attaches to DOM elements)
		newListItem.data('listIndex', i);
	};
}

/**
 * Handle new game submissions via form
 * @param  {Object} eventArguments
 */
var newGameSubmit = function(eventArguments){
	// prevent form from submitting,
	// which allows us to handle the functionality
	// ourselves instead of the browser
	eventArguments.preventDefault();

	// Cache input selectors
	var titleField = $(this).find('[name=title]');
	var descriptionField = $(this).find('[name=description]');

	// Grab the game title
	var gameTitle = titleField.val();

	// Grab the game description
	var gameDescription = descriptionField.val();

	// Create a new game object...
	var newGameItem = {
		title: gameTitle,
		description: gameDescription
	};

	// ... and push it into the global list
	gamesList.push( newGameItem );

	// After we update the list, re-render it
	renderList();

	// Clear the inputs back to empty strings
	titleField.val('');
	descriptionField.val('');
}


/**
 * Remove a game from the ul and from the list
 * @param  {Object} eventArguments
 */
var deleteGame = function(eventArguments){
	// Find the closest (looking up the DOM)
	// <li> to the delete button that was clicked
	var gameDisplay = $(this).closest('li');

	/*
		THIS USES THE INDEX-RELATIONSHIP SYSTEM
	
	// Find the index in the <ul> of this specific <li>
	var gameIndex = gameDisplay.index();

	// Remove that specific index from the running list
	gamesList.splice(gameIndex, 1);

	// Remove the game display (<li>) from the ul
	gameDisplay.remove();
	*/

	/*
		THIS USES THE DOM ATTACHMENT ONLY
	
	// Loop through the list of games
	for (var i = 0; i < gamesList.length; i++) {
		// Check to see if the DOM element matches
		// what gameDisplay's DOM element is
		if(gamesList[i].display.get(0) === gameDisplay.get(0)){
			// remove the associated display
			gamesList[i].display.remove();
			// splice the item from the list
			gamesList.splice(i, 1);

			// end the loop
			break;
		}
	};
	*/

	// Pull the index back out from the data object
	var listIndex = gameDisplay.data('listIndex');

	// Access that item from the gameslist by index
	var listItem = gamesList[listIndex];

	// Remove the associated display element
	listItem.display.remove();

	// Splice that index from the full list
	gamesList.splice(listIndex, 1);
}


// Wait for jQuery to be ready...
$(document).on('ready', function() {
  	
  // Kick off the rendering of preset list
  renderList();

  // Listen for submission of new game form
  // by passing a reference to our event handler
  // function defined above
  $('#new-game').on('submit', newGameSubmit);

  // Listen for (delegated) clicks on delete buttons
  $(document).on('click', '.delete', deleteGame);

});








