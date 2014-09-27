// This is just so we can keep a reference to the
// list of LI's created for testing purposes via console.
var testStorage = [];

$(document).on('ready', function() {

	/*
	// Use delegation to delay the detection of the LIs.
	// We don't need this anymore because we are attaching 
	$(document).on('click', 'li', function(e){
		console.log(this);
		e.stopPropagation();
	});
	console.log('Number of LIs at start:', $('li').length);
	*/

	// A function for handling the click event
	// which will be attached to each LI inside the
	// creation method
	var onClick = function(e){
		// Just print out the DOM element that was clicked on
		console.log(this);

		// Prevent parent LIs of this LI from also firing their click
		e.stopPropagation();
	};
  
  // Generate a data set that we will use as a reference
  // for the rendering. It will recursively move through the
  // tree, dynamically creating elements for each object key:prop.
	var dataSet = {
		games: {
			halo: 'A Cool game',
			HalfLife: 'Another cool game',
			playstation: {
				MetalGearSolid: 'A game about Snake',
				LittleBigPlanet: 'Fun sidescroller'
			}
		},
		movies: {
			horror:{
				saw: 'Scary...',
				TheRing: 'Not as scary...'
			},
			comedy: {
				SuperTroopers: 'From vermont!',
				HalfBaked: 'About drugs'
			}
		},
		shows: {
			southpark: 'Step 1, steal underpants, step 2, ??, step 3: profit.'
		}
	};


	/**
	 * A function that will take in an object of key
	 * value pairs, as well as a jQuery-wrapped DOM element,
	 * and will generate ULs and LIs for each node in the
	 * object. If it encounters a property that is itself also
	 * an object, it will recursively re-call the function and
	 * pass a reference to the child object as well as the freshly
	 * created LI as a container.
	 * @param  {Object} data      Dataset to use as content
	 * @param  {jQuery} container Container to place elements in
	 */
	var createList = function(data, container){
		// The starter UL that we will start to fill out
		var ul = $('<ul></ul>');

		// Loop through all the keys inside the given object
		for(var key in data){

			// Create an LI for the key/value pair...
			var li = $('<li></li>');

			// If this property in the object is itself an object...
			if(typeof data[key] === 'object'){
				// Set the text of the LI to the key of the object
				li.text(key + ': ');
				// And recursively render the properties of the sub object
				createList(data[key], li);
			} else {
				// This key/value was not an object, so just render it out
				li.text(key + ': ' + data[key]);
			}
			// Append the newly created LI (and thus any of its
			// children created by any number of recursive calls)
			// to the ul created in the above call
			ul.append(li);

			// Add the listener SPECIFICALLY to this dom element
			// when it is created.
			li.on('click', onClick);

			// Push a reference to this LI to our global testStorage
			// for testing purposes
			testStorage.push(li);
		}

		// Finally, append the created UL (and thusly all LIs
		// and ULs created inside it via any number of recursive
		// calls) to the given container (which itself could have
		// come from a recursive call).
		container.append(ul);
	};

	// Select the #main element on our HTML page
	// and use it as the starter container for the
	// createList function.
	var entryPoint = $('#main');
	createList(dataSet, entryPoint);


});