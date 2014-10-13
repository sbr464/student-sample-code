/*
	Entry point to our names application. This file
	has no names list internally and relies on the
	names.js file to get any name-related content.
 */

// Prompt node to load in the names.js file
// and store whatever is available in its "module.exports"
// into the variable "people"
var people = require('./names.js');

// Just to see what "people" contains
console.log('People:', people);


// Access the printNames method from the
// people variable. Since we exposed it
// via module.exports in the names.js file,
// we can access it here.
people.printNames();

// Just to see what "module" contains.
console.log('Module:', module);