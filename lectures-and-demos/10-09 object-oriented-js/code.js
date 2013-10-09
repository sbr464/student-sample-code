// Object-oriented programming is the design of software using a 

* collection of cooperating objects
	- each object has its own set of data
	- each object has its own functions (methods)
	- objects can 'interact'

// as opposed to a 

* collection of functions
* a list of instructions



var monk1 = {
	age: 39,
	yearsMeditating: 20
};

var monk2 = {
	age: 85,
	yearsMeditating: 53
};


// lots of global functions that take monk as an argument is awkward
function meditate(monk) {
	var om = 'Om';
	for(var i=0; i<monk.yearsMeditating; i++) {
		om += 'm';
	}
	console.log(om);
}

// meditate(monk1);
// meditate(monk2);


function walk(monk) {
	console.log('Walking Meditation');
	monk.meditate();
};

function getOlder(monk) {
	monk.age++;
	monk.yearsMeditating++;
};
























// methods
var monk1 = {
	age: 39,
	yearsMeditating: 20,
	meditate: function() {
		var om = 'Om';
		for(var i=0; i<this.yearsMeditating; i++) {
			om += 'm';
		}
		console.log(om);
	}
};


//meditate(monk1);
// monk1.meditate();

// the problem of different monks
var monk2 = {
	age: 85,
	yearsMeditating: 53
};

monk1.meditate();
monk1.meditate.call(monk2);





















var Person = function() {};
var raine = new Person();


// constructors
var Monk = function(age, yearsMeditating) {
	// instance variables
	this.age = age;
	this.yearsMeditating = yearsMeditating;
	this.meditate = function meditate() {
		var om = 'Om';
		for(var i=0; i<this.yearsMeditating; i++) {
			om += 'm';
		}
		console.log(om);
	}
};

// instantiation
var monk1 = new Monk(39, 20);
var monk2 = new Monk(85, 53);

monk1.meditate();
monk2.meditate();
























// meditate functions are not the same
consolelog(monk1.meditate === monk2.meditate);













// constructor with prototype
var Monk = function(age, yearsMeditating) {
	this.age = age;
	this.yearsMeditating = yearsMeditating;
};

Monk.prototype.meditate = function() {
	var om = 'Om';
	for(var i=0; i<this.yearsMeditating; i++) {
		om += 'm';
	}
	console.log(om);
};

var monk1 = new Monk(39, 20);
var monk2 = new Monk(85, 53);

monk1.meditate();
monk2.meditate();
























// changes made to an object's prototype are visible across all objects
Monk.prototype.walk = function() {
	console.log('Walking Meditation');
	this.meditate();
};

monk1.walk();

// all objects have a prototype!
console.log(Array.prototype.slice);
console.log(['pineapple', 'avocado', 'peach', 'papaya'].slice(2));

String.prototype.indexOf
String.prototype.supplant











//Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
	// Shape() - can't call Shape normally, because this would undefined
	// new Shape() - creates a separate Shape object
  Shape.call(this); //call super constructor.
}

//subclass extends superclass
Rectangle.prototype = new Shape();

var rect = new Rectangle();










//superclass method




console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

rect.move(1, 1);

// calling the superclass's constructor
function Rectangle() {
  Shape.call(this);
}

// Know the principle of object-oriented programming
// Know what a constructor is and how to use the new keyword
// Know the difference between modifying an instance of an object and modifying a prototype
// Know that every Constructor has a prototype
