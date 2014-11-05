// This code is to create a new bird
// and flock just on the client side:
//		var bird = new Bird();
//		var penguin = new Bird({
//			name: 'Penguin',
//			isFlightless: true,
//			edible: false,
//			image: 'http://dreamatico.com/data_images/penguin/penguin-3.jpg'
//		});

//		var flock = new Flock([
//			bird,
//			penguin
//		]);


// This will create an empty collection
var flock = new Flock();

// Use the Backbone reset() method to fill
// the collection with our bootstrapped data
// found in layout.jade
flock.reset(bootstrappedBirds);

// Build a view based on the collection
// and the given attributes.
var flockView = new FlockView({
	attributes: {
		title: 'My Super Cute Flock'
	},
	collection: flock
});

// jQuery onReady
$(function(){

	// Render the flock automatically
	flockView.render();

	// Append the flock element to the page
	$('body').append(flockView.el);
	
});