
// Using filter, take the array [2,6,5,3,10,11] and give back [2,6,10]
var original = [2,6,5,3,10,11];

// Check to see if the given number
// is divisible evenly by 2.
var isEven = function(num) {
	return num % 2 === 0;
};

console.log( original.filter(isEven) );





// Using filter, take the array ['cat', 'dog', 'cucumber', 'eclair'] and
// give back ['cat', 'cucumber']
var original = ['cat', 'dog', 'cucumber', 'eclair'];

var startsWithC = function(word){
	console.log(word);
	return word[0].toLowerCase() === 'c';
};

console.log( original.filter(startsWithC) );







// Get back a list of numbers that are less than 8, but show their square value
// ex: [1,2,5,10] -> [1,4,25]

var original = [1,2,5,10];

// Check if a given number is less than 8
var isLessthan8 = function(num){
	return num < 8;
};

// Given a number, return its square value
var square = function(num){
	return num * num;
};

// Use a combination of map and filter to get the result:
// 	1) Given a list of numbers, filter all that are less than 8
// 	2) Given a list of numbers, return an array of each number squared
console.log( original.filter(isLessthan8).map(square) );