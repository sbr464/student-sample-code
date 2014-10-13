/*

	This file is intended to be included (loaded)
	into other files. It creates internal variables
	which are only available inside the scope of this
	file. Look back at the privacy and namespacing
	examples to see a bit more about what's going on
	behind-the-scenes.

	The way that we "expose" certain aspects of this
	file is to use the module.exports object. Anything
	stored in this pre-created variable will be available
	to anything that "requires" this file. See "nameprinter.js"
	for an example of require.

 */

// Define an internal (to this file) variable
var names = ['Chris', 'Raine', 'Sean', 'Dorian', 'Ben'];

// Another internal variable
var locations = ['Class', 'Retreat', 'Baby', 'Class', '???'];

// This is also an internal variable, but it demonstrates
// the idea that the scope is maintained. Much like our other
// namespacing/privacy examples, we can expose this function
// and it will retain access to "names" and "locations"
var printNames = function(){
	// Loop through each name in the internal variable
	for (var i = 0; i < names.length; i++) {
		// Print a message to the console
		console.log(names[i] + ' says hi!');
	};
};

// Whatever is assigned to module.exports will
// be available to any files that "require" this
// content. In this case, we are exposing an
// object literal that will give external
// access to our printNames function.
module.exports = {
	printNames: printNames
};
