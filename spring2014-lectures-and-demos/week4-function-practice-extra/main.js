/** Write a function 'zip' that takes two arrays and returns an object of key-value pairs, where the keys come from the first array, and the values come from the second. */
var zip = function(keys, values) {
	var obj = {};
	for(var i=0; i<keys.length && i<values.length; i++) {
		// syntax for setting a property on an object
		// obj[KEY] = VALUE;

		// we want the key of this property, to be the value at index i in the keys array: i.e. keys[i] (city, name, age)

		// we want the value of this property, to be the value at index i in the values array: i.e. values[i] ('Boulder', 'Theodore', 77)
		obj[keys[i]] = values[i];
	}
	return obj;
};




