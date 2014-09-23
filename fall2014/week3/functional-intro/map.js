// Using map, turn the array of [1,2,3,4,5] into [2,4,6,8,10]
var original = [1,2,3,4,5];

var doubler = function(num){
	return num * 2;
};

console.log( original.map(doubler) );




// Using map, turn the array of ['Chris', 'Joe', 'Frodo']
// into the array ['cHRIS', 'jOE', 'fRODO']
var original = ['Chris', 'Joe', 'Frodo'];

var invCapName = function(name){
	// lower case the first letter,
	// slice out the rest of the string and convert to uppercase
	return name[0].toLowerCase() + name.slice(1).toUpperCase();
};

console.log( original.map(invCapName) );
// Same as above, but join the array elements together as a string
console.log( original.map(invCapName).join(' and ') );