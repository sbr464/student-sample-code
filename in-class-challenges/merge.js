/*
Write a function that takes two objects as arguments, and returns a single object with the union of all properties from the two given objects. 

If the two objects have identical properties, the second argument's should override the first's.
*/

var one = { a: 1, b: 2, c: 3 };
var two = { a: 10, x: 20, z: 30 };
// merged: { a: 10, b: 2, c: 3, x: 20, z: 30 };

var merge = function(first, second) {
	var union = {};

	for(var key in first) {
		union[key] = first[key];
	}

	for(var key in second) {
		union[key] = second[key];
	}

	return union;
}

console.log(merge(one, two));
