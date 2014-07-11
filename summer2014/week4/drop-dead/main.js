// create a MoonGame namespace to contain all the game variables. Use the revealing module pattern with IIFE
// IIFE: Function expression, surrounded by parentheses (), then immediately invoked: ()
var MoonGame = (function() {

	// constants
	var NUM_BIRDS = 40;
	var MAX_TOP = 60;
	var MAX_LEFT = 90;
	var PLAGUE_RATE = 500;
	var SICK_RATE = 200;
	var SICK_DAMAGE = 20;

	var birdAutoIncrement = 0;

	// Bird constructor
	var Bird = function() {
		this.health = 100;
		this.status = 'healthy';
		this.id = birdAutoIncrement++;
	}
	Bird.prototype.create = function() {
		this.el = $('<i class="bird icon-twitter-bird">')
			.attr('data-id', this.id)
			.css({
				top: Math.random() * MAX_TOP + '%',
				left: Math.random() * MAX_LEFT + '%'
			})
		this.update();
		return this.el;
	}
	Bird.prototype.update = function() {
		this.el
			.removeClass('healthy')
			.removeClass('sick')
			.removeClass('dead')
			.css('-webkit-transform', 'rotateZ(' + (-100+this.health) + 'deg)')
			.addClass(this.status)
	}
	Bird.prototype.getSick = function() {
		var self = this;
		this.status = 'sick';
		this.update();

		this.sickTimer = setInterval(function() {
			self.health -= SICK_DAMAGE;
			if(self.health <= 0) {
				self.die();
			}
			self.update();
		}, SICK_RATE)

	}

	Bird.prototype.die = function() {
		var self = this;
		this.status = 'dead';
		this.el.css('top', '100%');
		this.el.off('click');
		$('.sky').append(this.el);
		flock.birds = _.reject(flock.birds, function(bird) {
			return bird.id === self.id;
		});
		flock.create();
		clearInterval(this.sickTimer)
	}

	// Penguin constructor
	var Penguin = function() {
	}
	Penguin.prototype.create = function() {
		this.el = $('<i class="penguin icon-plancast">');
		return this.el;
	}

	// Flock constructor
	var Flock = function(penguin) {
		this.penguin = penguin;
		this.birds = [];
	}
	Flock.prototype.create = function() {
		var newEl = $('<div class="flock">');
		newEl.append(this.penguin.create());
		newEl.css('bottom', this.birds.length * 5)

		// append all birds to the flock
		for(var i=0; i<this.birds.length; i++) {
			newEl.append(this.birds[i].el)
		}

		// replace the old flock with the new flock
		if(this.el) {
			this.el.replaceWith(newEl);
		}
		this.el = newEl;

		return newEl;
	}
	Flock.prototype.addBirdClickHandler = function(bird) {
		var self = this;
		bird.el.on('click', function() {
			self.birds.push(bird)
			self.create()
		})
	};

	// declare array of free-flying birds
	var birds = [];
	var flock = null;

	var init = function() {

		// create the flock
		var penguin = new Penguin();
		flock = new Flock(penguin);
		$('.sky').append(flock.create());

		// create birds in the sky
		for(var i=0; i<NUM_BIRDS; i++) {
			var bird = new Bird();
			var birdEl = bird.create();
			$('.sky').append(birdEl);
			birds.push(bird);
			flock.addBirdClickHandler(bird);
		}
	}

	var beginPlague = function() {

		setInterval(function() {

			var healthyBirds = $('.bird.healthy');

			if(healthyBirds.length) {
				var doomedBirdElement = $(_.sample(healthyBirds));
				var birdId = +doomedBirdElement.attr('data-id');
				var doomedBird = _.findWhere(birds, { id: birdId });
				doomedBird.getSick();
			}

		}, PLAGUE_RATE)
	}

	// Return an object literal with the properties and methods that we wish to "reveal" to the rest of the program. Everything else remains private.
	return {
		init: init,
		beginPlague: beginPlague
	};

})();

$(document).on('ready', function() {
  MoonGame.init();

  $('#start').on('click', MoonGame.beginPlague);

});