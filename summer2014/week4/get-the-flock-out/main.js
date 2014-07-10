// create a MoonGame namespace to contain all the game variables. Use the revealing module pattern with IIFE
// IIFE: Function expression, surrounded by parentheses (), then immediately invoked: ()
var MoonGame = (function() {

	// constants
	var NUM_BIRDS = 20;
	var MAX_TOP = 60;
	var MAX_LEFT = 90;

	// #1 Moon constructor
	// parameters allow you to customize how an object is created
	var Moon = function(colorForNewMoon) {
		// instance properties are needed when a value attached to the moon must be tracked
		// this.x = 0;
		// this.color = 'red';
		this.color = colorForNewMoon;
	}

	// var moonA = new Moon('green');
	// var moonB = new Moon('blue');
	// moonA.color = 'green';
	// moonB.color = 'blue';

	Moon.prototype.create = function() {
		var element = $('<i class="moon icon-moon"></i>')
		element.css('color', this.color);
		return element;
	}


	// #2 Moon object literal
	// an object literal is just a single instance from the start
	// var moonA = {
	// 	color: 'green'
	// }
	// var moonB = {
	// 	color: 'green'
	// }


	// Bird constructor
	var Bird = function() {
	}
	Bird.prototype.create = function() {
		this.el = $('<i class="bird icon-twitter-bird">');
		this.el.css({
			top: Math.random() * MAX_TOP + '%',
			left: Math.random() * MAX_LEFT + '%'
		})
		return this.el;
	}

	// Penguin constructor
	var Penguin = function() {
	}
	Penguin.prototype.create = function() {
		this.el = $('<i class="penguin icon-plancast">');
		return this.el;
	}

	// declare array of free-flying birds
	var birds = [];

	var init = function() {

		// create birds in the sky
		for(var i=0; i<NUM_BIRDS; i++) {
			var bird = new Bird();
			var birdEl = bird.create();
			$('.sky').append(birdEl);
			birds.push(bird);
		}

		// 1. instantiate a moon object
		var moon1 = new Moon('silver');
		var moon2 = new Moon('black');
		var moon3 = new Moon('red');
		var moon4 = new Moon('green');
		var moon5 = new Moon('blue');
		$('.sky').append(
			moon1.create(),
			moon2.create(),
			moon3.create(),
			moon4.create(),
			moon5.create()
		);

		// $('sky').append((new Moon('silver')).create());
	}

	// Return an object literal with the properties and methods that we wish to "reveal" to the rest of the program. Everything else remains private.
	return {
		init: init
	};

})();

$(document).on('ready', function() {
  MoonGame.init();

 // $('body').append($('<i class="icon-twitter-bird">').on('click', function() {}).css(''))

});