$(function() {

	// MODEL

	/** A 2-dimensional array of values. 
		@param size The width and height of the grid. Default: 10.
		@param value An optional value to initialize all cells in the grid as. Default: null.
	*/
	var Grid = function(size, value) {
		this.size = size || 10;
		value = value || null;

		this.arr = [];
		for(var i=0; i<this.size; i++) {
			var row = [];
			for(var j=0; j<this.size; j++) {
				row.push(value);
			}
			this.arr.push(row);
		}
	};

	/** Inserts a value into the grid at the specified x and y coordinate. If x or y are out of bounds, it is wrapped to the other size. */
	Grid.prototype.insert = function(value, x, y) {
		if(y > this.size) {
			y = y % this.size;
		}
		if(x > this.size) {
			x = x % this.size;
		}
		if(y < 0) {
			y = this.size-1;
		}
		if(x < 0) {
			x = this.size-1;
		}
		this.arr[y][x] = value;
	};

	/** A Grid-based garden with various denizens. */
	var Garden = function() {
		this.grid = new Grid(10);
	};


	/** Creates a table element with all the garden denizens. */
	Garden.prototype.create = function() {
		return $('<table class="grid">').append(this.grid.arr.map(function(row) {
			return $('<tr>').append(row.map(function(cell) {
				return $('<td>').append(
					cell ? cell.create() : null
				)
			}));
		}));
	};

	/** Animates each denizen in the garden. */
	Garden.prototype.step = function() {
		var newGrid = new Grid(this.grid.size);

		for(var y=0; y<this.grid.arr.length; y++) {
			var row = this.grid.arr[y];
			for(var x=0; x<row.length; x++) {
				var cell = row[x];
				if(cell) {
					var delta = cell.step();
					newGrid.insert(
						cell, 
						x + (delta ? delta.x : 0), 
						y + (delta ? delta.y : 0)
					);
				}
			}
		}

		this.grid = newGrid;
	}

	/** A base class for insects. */
	var Insect = function() {

	};

	/** Moves the insect one cell in a random direction. */
	Insect.prototype.step = function() {
		var xRand = Math.floor( Math.random() * 2 );
		var yRand = Math.floor( Math.random() * 2 );

		if(xRand === 0) {xRand = -1; }
		if(yRand === 0) {yRand = -1; }

		return {
			x: xRand,
			y: yRand
		};
	}

	/** A buzzy insect. */
	var Bee = function() {
	};
	Bee.prototype = new Insect();

	Bee.prototype.buzz = function() {
		console.log('buzzzzzzz');
	};

	Bee.prototype.pollinate = function(flower) {
		flower.pollinated = true;
	};

	/** Creates an element that represents the bee. */
	Bee.prototype.create = function() {
		return $('<div class="icon" class="bee"><img src="images/bee.png"></div>');
	};

	/** A beautiful flower. */
	var Flower = function(color) {
		this.color = color;
		this.pollinated = false;
	};

	/** Creates an element that represents the flower. */
	Flower.prototype.create = function() {
		var src = this.pollinated ? 'pollinated' : 'unpollinated';
		return $('<div class="icon" class="flower"><img src="images/flower-{0}.png"></div>'.supplant([src]));
	};

	/** The flower doesn't do anything... */
	Flower.prototype.step = function() {
	};

	/** A creepy crawly. */
	var Ant = function() {

	};
	Ant.prototype = new Insect();

	/** Creates an element that represents the ant. */
	Ant.prototype.create = function() {
		return $('<div class="icon" class="ant"><img src="images/ant.png"></div>');
	};


	// MAIN

	// create a garden and some denizens
	var garden = new Garden();
	var a = new Ant();
	var f = new Flower();
	var b = new Bee();

	// insert the denizens into the garden
	garden.grid.insert(a, 2, 4);
	garden.grid.insert(f, 7, 1);
	garden.grid.insert(b, 5, 8);

	// render the garden
	$('.container').append(garden.create());

	// every second, call the step function of the garden and re-render it
	setInterval(function() {
		garden.step();
		$('.grid').replaceWith(garden.create());
	}, 1000);

});
