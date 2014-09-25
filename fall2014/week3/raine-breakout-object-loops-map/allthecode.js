// literal notation
"Raine"
true
[1,2,3]
5

// object literal
{ city: 'Boulder' }

var event = { 
	name: 'Bolder Boulder',
	city: 'Boulder' 
};

// access the value of a property
console.log(event.city);
console.log(event['city']);

// when do you have to use bracket notation?

// 1. when you're trying to access the value of a dynamic key (from a variable; not a literal)
var myPropertyName = 'city'
console.log(obj[myPropertyName])
console.log(arr[i])

// 2. if the key is not a 'valid identifier'
console.log(obj['number-of-boxes'])
console.log(obj['for'])

// get an array of all the keys
Object.keys(obj)

// deleting a value
delete obj.city
delete obj['number-of-boxes']

// modifying/adding a value
obj.city = 'Denver'
obj.city += 's'
obj['city'] = 'Denver'

// looping over an object
// key is an arbitrary loop variable
for(var key in event) {
	console.log(key);
	console.log(event[key]);

	// nested object loop
	var obj2 = event[key]
	for(var key2 in obj2) {

	}
}

var celsiusTemps = [20, 23, 22, 14, 16, 20];

var celsiusToFahrenheit = function(c) {
	// if(arguments.length !== 1) {

	// }
	return c * 9 / 5 + 32;
};

var fahrenheitTemps = [];
for(var i=0; i<celsiusTemps.length; i++) {
	var f = celsiusToFahrenheit(celsiusTemps[i])
	fahrenheitTemps.push(f);
}

// write a function that takes an input array and a conversion function
// and returns an output array
// (we are generalizing the celsius->fahrenheit algorithm to work for any type of conversion of an array)
var mappingConversion = function(inputArray, conversionFunction) {

	var outputArray = [];

	for(var i=0; i<inputArray; i++) {
		var convertedValue = conversionFunction(inputArray[i]);
		outputArray.push(convertedValue);
	}

	return outputArray;
}


var fahrenheitTemps = mappingConversion(celsiusTemps, celsiusToFahrenheit);
var fahrenheitTemps = celsiusTemps.map(celsiusToFahrenheit);







