/*
	- User controls jet with arrow keys
	- Lightning falls from top
	- User starts with gold trophy
	- Trophy is demoted with each lightning strike
	- Lightning strike with no trophy = GAME OVER
*/

// procedural
// var jetX = 0;
// var jetY = 0;

// constants
var screenWidth = $(window).width();
var screenHeight = $(window).height();
var blockSize = 18;
var interval = 500;
var thorInterval = 500;

var Jet = function(x, y) {

	this.x = x || 0;
	this.y = y || screenHeight/2;
	this.lives = 3;

	// direction must be 'up', 'down', 'forward'
	this.move = function(direction) {
	}

	this.checkCollision = function(lightningBolt) {
		// check if the jet collides with the lightning bolt
	}

	this.render = function() {
		var el = $('<i class="icon-fighter-jet"></i>');
		$('.container').append(el);

		el.css({
			position: 'absolute',
			top: this.y - el.height()/2,
			left: this.x
		});
	}

};

var LightningBolt = function(x, y) {

	var self = this;
	this.x = x || _.random(0, screenWidth);
	this.y = y || 0;

	// Drops the lightning bolt down one block
	this.drop = function() {
		self.y += blockSize;
		self.el.css('top', self.y)
	}

	this.fall = function() {
		setInterval(this.drop, interval);

		// detect if it has hit the bottom of the screen
	}

	this.render = function() {
		this.el = $('<i class="icon-flash"></i>')
		$('.container').append(this.el);

		this.el.css({
			position: 'absolute',
			top: this.y,
			left: this.x - this.el.width()
		});
	}

};

var Thor = function() {
	var self = this;
	this.bolts = [];

	this.fireAndBrimstone = function() {

		setInterval(function() {

			var bolt = new LightningBolt();
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
