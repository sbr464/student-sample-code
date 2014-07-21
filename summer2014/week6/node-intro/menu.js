// in node, each file has its own scope, so we don't have to use an artificial module pattern to encapulate our code; variables are only accessible from within the same file until we "export" them

var breakfast = [
	'whiskey',
	'tequila',
	'schnapps',
	'rum',
	'mulled wine'
];

var lunch = [
	'beer',
	'vodka',
	'carbomb'
];

// whatever we assign to module.exports becomes available to a file that requires this file
module.exports = {
	breakfastMenu: breakfast,
	lunchMenu: lunch
}
