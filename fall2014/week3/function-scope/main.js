var a = 10;

var func = function(){
	// This declares a new variable of "a",
	// which "hides" the previous definition
	var a = 20;
	console.log('func:', a);

	var nestedFunc = function(){
		// Hide "a" yet again...
		var a = 30;
		// This uses "a" as defined in func()
		console.log('nestedFunc:', a);
	};
	nestedFunc();
};

console.log('1st:', a);
func();

// If "a" was hidden by func(), then this
// will print out the original value of "a" on
// line 1. If it was NOT hidden, then "a" will
// show the value given from func() on line 6.
console.log('last:', a);



// GARBAGE COLLECTION

// create an object in memory and assign a
// reference to it via the keyword "var1"
var var1 = {
	key: 10;
};

// Reassign a new value to "var1"
var1 = 10;

// Nothing is referencing the original object,
// So the browser can garbage collect it and free
// up the space for more variables.


var var2 = {
	key1: {
		key2: 'Hello!'
	},
	name: 'Test'
};

// Stores another reference to part of the
// object created by var2
var holder = var2.key1;

var2 = 'goodbye';
// Much of var2 can be collected, but there
// is still a reference to the sub-object being
// held by the "holder" variable

holder = null;
// Holder is now cleared which means no references
// remain to the original objects created by var2.