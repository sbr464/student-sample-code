/* Write a function that takes a single object as an argument, and returns the number of key-value pairs on that object. */

var testObject = { a: 1, b: 2, c: 3 };

var lengthOfObject = function(obj) {
	var length = 0;
	for(var key in obj) {
		length++; // length = length + 1
	}
	return length;
};

console.log(lengthOfObject(testObject));