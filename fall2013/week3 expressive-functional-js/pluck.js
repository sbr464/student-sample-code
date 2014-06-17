var persons = [
	{ name: 'raine', age: 28 },
	{ name: 'matt', age: 26 },
	{ name: 'chris', age: 24 }
];

// procedural
var output = [];
for(var i=0; i<persons.length; i++) {
	output.push(persons[i].age);
}

console.log(output);

// functional
var pluck = function(arr, propertyName) {
	var output = [];
	for(var i=0; i<arr.length; i++) {
		output.push(arr[i][propertyName]);
	}
	return output;
};

console.log( pluck(persons, 'age') );