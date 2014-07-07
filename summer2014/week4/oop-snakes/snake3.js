var Animal = function(name) {

	this.name = name;

	this.move = function() {
		console.log('Moved 5ft forward...');
	}

};

// define a Snake constructor
var Snake = function(name) {

	// 2. Invoke the constructor the superclass with a context of 'this'
	// NOTE: call is a built-in method that allows you to invoke a function with a custom context (value of 'this')
	// WHAT'S IMPORTANT: This is needed to pass values from the subclass to the superclass in the constructor.
	Animal.call(this, name);

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

// 1. Set the prototype of the subclass to the parent class
// Subclass.prototype = new Parentclass();
Snake.prototype = new Animal();

// 3. Set the constructor property
Snake.prototype.constructor = Snake;

// functionality is the same as the original snake object in snake1.js, but now we can create multiple snakes because we have a Snake constructor
var snake1 = new Snake();
var snake2 = new Snake();
var snake3 = new Snake();

// check the initial value of the snake1's deadSkin property
// console.log('initial snake1.deadSkin:', snake1.deadSkin);

// call the molt method of the snake1
// snake1.molt()

// check that the snake1's deadSkin value has been set to 0
// console.log('after molt snake1.deadSkin:', snake1.deadSkin);

// snakes inherit functionality (properties and methods) from superclass (Animal)
var kaa = new Snake('Kaa');

// we can call the move function which is defined on animal
kaa.move();

// WRONG: Animal.move 		Can't call a method on the constructor itself, must be called on an instance
// WRONG: Snake.move 		Can't call a method on the constructor itself, must be called on an instance

// instanceof will return true for constructor and superclass constructor
kaa instanceof Snake // true
kaa instanceof Animal // true
kaa instanceof Object // true
