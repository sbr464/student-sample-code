/* Write a function that takes a single argument (an object) and returns an array of all the keys in that object. */

var testObject = { a: 1, b: 2, c: 3 };

var k = function(obj) {
	var keyArray = [];
	for(var key in obj) {
		keyArray.push(key);
	}
	return keyArray;
};

console.log(k(testObject));