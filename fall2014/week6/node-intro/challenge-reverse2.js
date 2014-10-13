/*

	Write a node application that takes in
	any number of command line arguments, joined as a string,
	reverses it, and then prints it back to the user.

	e.g.
		node challenge-reverse.js Playground
		node challenge-reverse.js "This beat is sick"
		node challenge-reverse.js I just want to bang on the drum all day

 */

// Grab all arguments after and including
// index 2 and then join them together as
// a single string.
var userString = process.argv
	.slice(2)
	.join(' ');


// Split the string on every character,
// reverse that resulting array,
// and then join it back into a string.
var reversedString = userString
	.split('')
	.reverse()
	.join('');

// Print the string backwards
console.log(reversedString);