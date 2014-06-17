var i = 10;
var name = 'tom';

// anything other than a function call
// does not create a new scope
for(var i=0; i<3; i++) {
	console.log(i);

	if(i % 2 === 0) {
		var name = 'name' + i;
		// something...
	}
}

console.log('After for loop: ', i);
console.log('name?', name);
