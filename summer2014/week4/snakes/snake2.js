// define a Snake constructor
var Snake = function() {

	// inside the constructor, this refers to the host object, or the new instance that is created every time the 'new' keyword is used

	// set the deadSkin property of the new snake instance to 0
	this.deadSkin = 0;

	// set the molt method of the new snake instance
	this.molt = function() {
		var original = this.deadSkin;
		this.deadSkin = 0;
		return original;
	}

	// set the slither method of the new snake instance
	this.slither = function() {
		this.deadSkin += 5;
	}
}

// functionality is the same as the original snake object in snake1.js, but now we can create multiple snakes because we have a Snake constructor
var snake1 = new Snake();
var snake2 = new Snake();
var snake3 = new Snake();

// check the initial value of the snake1's deadSkin property
console.log('initial snake1.deadSkin:', snake1.deadSkin);

// call the molt method of the snake1
snake1.molt()

// check that the snake1's deadSkin value has been set to 0
console.log('after molt snake1.deadSkin:', snake1.deadSkin);
