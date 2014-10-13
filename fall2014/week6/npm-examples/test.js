/*

	NPM is a package manager for node applications.
	It allows us to use modules created by others
	and expands our library access to more than just
	what the core node modules give us. In this case,
	we want to be able to use underscore and moment.
	However, because we are in node and node doesn't
	have a browser, we can't use CDNs like we do on the
	client side. Rather, we include these libraries via
	NPM into our package.json file and then require them
	as if they are core modules.

	Step 1 is to create a package.json file. This is where
	we will be able to keep track of any library/module
	dependencies our project needs to survive.

	Step 2 is to install the packages. If the package.json
	file already existed prior to step 1 (like cloning
	someone elses project), then you can simply run "npm install".
	If you need to add new dependencies, run: "npm install <name> --save"
	The --save argument will tell NPM to update our package json
	and include the new library.

 */

// We've included underscore and moment in package.json
var _ = require('underscore');
var moment = require('moment');

// Create an array of movies
var movies = ['The Shining', 'Mean Girls', 'Superman'];

// Use underscore to grab a random movie from the list
console.log( _.sample(movies) );

// Use moment to print out todays date.
console.log( moment().format('M D YYYY') );