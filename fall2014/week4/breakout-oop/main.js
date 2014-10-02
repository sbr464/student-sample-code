/**
 * Footwear base class for all future
 * footwear styles.
 * @param {number} size Size of footwear
 */
var Footwear = function(size){
	console.log('Footwear Constructor:', this);
	this.size = size;
};

/**
 * Allow a person to wear footwear
 * @param  {string} person Name of person
 */
Footwear.prototype.wear = function(person) {
	console.log(person + ' puts on the size ' + this.size + 'footwear.');
};

/**
 * Fun socks that are still inheriting from Footwear
 * @param {number} size         Size of footwear
 * @param {number} numberOfToes Number of toes in the socks
 */
var Toesocks = function(size, numberOfToes){
	console.log('Toesocks Constructor:', this);

	// Execute the Footwear constructor on
	// the new instance of Toesocks so that
	// all properties set in that constructor
	// will copy over to the toesocks instance
	var instanceOfToesock = this;
	Footwear.call(instanceOfToesock, size);

	// Set our own instance variables now
	this.numberOfToes = numberOfToes;
};

// Replace the prototype of the Toesocks
// with that of the Footwear. This will
// allow us to "inherit" the prototype
// methods and values.
Toesocks.prototype = new Footwear();
// This will re-reference the constructor
// property of the toesock prototype so that
// in the future we have direct access to the
// original method used as a constructor.
Toesocks.prototype.constructor = Toesocks;

/**
 * Toesocks that are specifically robotic. They
 * will inherit properties from both Toesocks AND
 * from Footwear
 * @param {number} size         Size of robotic socks
 * @param {number} numberOfToes Number of toes
 * @param {number} voltage      Voltage of socks
 */
var RobotToesocks = function(size, numberOfToes, voltage){
	console.log('RobotToesocks Constructor:', this);

	Toesocks.call(this, size, numberOfToes);

	// Voltage is "optional," and if it is not
	// passed into the constructor, it will default
	// to "0"
	this.voltage = voltage || 0;
};
RobotToesocks.prototype = new Toesocks();
RobotToesocks.prototype.constructor = RobotToesocks;


// Original tests of just the Footwear
// and the Toesocks classes

/*var myFootwear = new Footwear(10);
console.dir(myFootwear);

var myToesocks = new Toesocks(60, 30);
console.dir(myToesocks);*/

// Seeing how generating a new instance of
// RobotToesocks will inherit from both
// Toesocks and from Footwear
var roboticToesocks = new RobotToesocks(20, 5, 100000);
