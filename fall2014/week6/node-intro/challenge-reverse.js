/*

	Write a node application that takes in
	a string from the command line arguments,
	reverses it, and then prints it back to the user.

	e.g.
		node challenge-reverse.js Playground
		node challenge-reverse.js "This beat is sick"

 */

// Retrieve the user-entered string from command line arguments
var userString = process.argv[2];

// Split the string on every character,
// reverse that resulting array,
// and then join it back into a string.
var reversedString = userString
	.split('')
	.reverse()
	.join('');

// Print the string backwards into the console
console.log(reversedString);