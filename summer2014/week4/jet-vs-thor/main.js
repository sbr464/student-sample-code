/*
	- User controls jet with arrow keys
	- Lightning falls from top
	- User starts with gold trophy
	- Trophy is demoted with each lightning strike
	- Lightning strike with no trophy = GAME OVER
*/

// Defining global variables (procedural) instead of defining instance properties (object-oriented)
// var jetX = 0;
// var jetY = 0;

// Define constants (numbers, settings, etc) at the top of the program. This makes it easier to tweak values than having to dig through your code to find where the values are used.
var screenWidth = $(window).width();
var screenHeight = $(window).height();

// the numbers of pixels that a lightning bolt will fall each step
var blockSize = 18;

// the number of milliseconds between lightning bolt falls
var interval = 500;

// the number of milleseconds between Thor's lightning bolt throws
var thorInterval = 500;

// Define the Jet constructor
var Jet = function(x, y) {

	// set the x, y, and lives properties on the new Jet instance
	this.x = x || 0;
	this.y = y || screenHeight/2;
	this.lives = 3;

	// Moves the jet 'up', 'down', or 'forward'
	this.move = function(direction) {
	}

	// Returns true or false of the jet has collided with the given lightning bolt.
	this.checkCollision = function(lightningBolt) {
		// check if the jet collides with the lightning bolt
	}

	// Create a new element for the jet and insert it into the DOM in the right position
	this.render = function() {
		this.el = $('<i class="icon-fighter-jet"></i>');
		$('.container').append(this.el);

		this.el.css({
			position: 'absolute',
			top: this.y - this.el.height()/2, // adjust the y position by half the jet's height to make it properly centered
			left: this.x
		});
	}

};

// Define the constructor for the lightning bolt
var LightningBolt = function(x, y) {

	// store the current value of this (the lightning bolt instance) so that it can be used later when the context changes in setInterval
	var self = this;

	// set the default x value to a random position along the top of the screen
	this.x = x || _.random(0, screenWidth);
	this.y = y || 0;

	// Drops the lightning bolt down one block size
	this.drop = function() {

		// update the internal y property
		self.y += blockSize;

		// update the element's top property accordingly
		self.el.css('top', self.y)
	}

	this.fall = function() {

		// drop the lightning bolt every INTERVAL milleseconds
		setInterval(this.drop, interval);

		// detect if it has hit the bottom of the screen
		// TODO
	}

	// creates a new element that represents the lightning bolt and inserts it into the DOM in the right position
	this.render = function() {
		this.el = $('<i class="icon-flash"></i>')
		$('.container').append(this.el);

		this.el.css({
			position: 'absolute',
			top: this.y,
			left: this.x - this.el.width() // adjust the x position by the width of the lightning bolt to keep it from overflowing the edge
		});
	}

};

// Define the Thor constructor
var Thor = function() {

	// store the instance of thor so we can refer to it when 'this' gets screwed up
	var self = this;
	this.bolts = [];

	// Start throwing lightning bolts!
	this.fireAndBrimstone = function() {

		// create a new lightning bolt and render it every 'thorInterval' milliseconds
		setInterval(function() {

			var bolt = new LightningBolt();

			// 'this' doesn't refer to thor here because the context is loss inside the setInterval function. Use the previously stored self.
			self.bolts.push(bolt);
			bolt.render();
			bolt.fall();

		}, thorInterval)

	}
}

var Trophy = function() {

	this.status = 'gold';

};

$(document).on('ready', function() {

	// create and render the player's jet
  var player1 = new Jet();
  player1.render();

  // create Thor and have him start throwing lightning bolts
  var thor = new Thor();
	thor.fireAndBrimstone();  

});
