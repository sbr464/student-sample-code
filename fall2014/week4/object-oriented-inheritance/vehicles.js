/**
 * Vehicle class. Contains common elements
 * for all vehicles.
 * @param {string} color Color of the vehicle
 */
var Vehicle = function(color){
	// Set this instance's vehicle color
	this.color = color;
};

/**
 * Method to allow vehicles to move
 */
Vehicle.prototype.move = function() {
	console.log('Moving!');
};

/**
 * Class to help define Cars, extends from
 * the Vehicle class
 * @param {string} color Color of the car
 * @param {string} make  Make of the car
 */
var Car = function(color, make) {
	// 1. Call the base-class constructor
	// 			This works by taking advantage of
	// 			how "call" allows us to set an
	// 			execution context on any function
	// 			(which is what "this" means in the function).
	// 			By calling the base class' constructor and
	// 			setting the context to the new instance of
	// 			the Car that we are creating, we can set the
	// 			same values on the object that the base constructor
	// 			already sets up. Just set the context to "this" and
	// 			pass the same number of arguments.
	Vehicle.call(this, color);

	// 2. Set any car-specific variables
	// 			These will be set ON TOP OF the base
	// 			class variables set in the above .call().
	// 			If you are inheriting a class, just call
	// 			that class' constructor and you won't need
	// 			to manually set (i.e. re-type) the same
	// 			"this.prop" calls.
	this.make = make;
};

// 3. Inherit the prototype
// 			Prototypal inheritance means that the Car
// 			class will retain all the same methods as
// 			the Vehicle class as well as any additional
// 			methods and properties we attach after steps
// 			3 and 4.
Car.prototype = new Vehicle();

// 4. Reset the constructor property back to Car
// 			Because we completely replaced the prototype
// 			of Car in step 3, we would lose the idea of
// 			what constructor was used to generate the car.
// 			This just restores the value.
Car.prototype.constructor = Car;


/**
 * Class to help define boats. Extends from
 * the Vehicle class.
 * @param {number} length Length of the boat
 */
var Boat = function(length){
	// Force a color on the boat
	Vehicle.call(this, 'white');
	// Set the boat-specific length property
	this.length = length;
};

Boat.prototype = new Vehicle();
Boat.prototype.constructor = Boat;


/**
 * Base class for all Yachts in the club.
 * @param {number} length     How massive is your Yacht?
 * @param {string} classLevel How classy is your Yacht?
 */
var Yacht = function(length, classLevel){
	Boat.call(this, length);
	this.classLevel = classLevel;
};
Yacht.prototype = new Boat();
Yacht.prototype.constructor = Yacht;


/////////////
// TESTING //
/////////////

// We can create instances of any of the classes
// that have been declared:

// This is our base class. More likely that
// you won't instantiate the base class on
// it's own. More often it'll be via a class
// that inherits from the base.
var myVehicle = new Vehicle('red');
myVehicle.move();

// Creating an instance of a car means we
// have access to all the original Vehicle bits
// as well as the new "make" property.
var myCar = new Car('green', 'subaru');
myCar.move();
console.log('Car Make:', myCar.make);

// Boats have the same abilities as a Vehicle
// base class as well as a length property
var myBoat = new Boat(22);
myBoat.move();
console.log('Boat Length:', myBoat.length);

// Yachts have everything that a Boat has, which
// also includes the Boat's base class of Vehicle.
// Plus they define their own properties on top of
// the stack.
var myYacht = new Yacht(300, 'super classy');
myYacht.move();
console.log('Yacht Length:', myYacht.length);
console.log('Yacht Class:', myYacht.classLevel);


