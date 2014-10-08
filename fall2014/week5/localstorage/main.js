// Create a regular ol' JS object literal
var myObject = {
	a: 10,
	test: 'Hello World',
	b: [
		'something', 'something else'
	]
};

// Convert the object into a JSON string
var myObjectJson = JSON.stringify( myObject );

// Store into localStorage. Both arguments need
// to be strings, so that's why we convert the
// data to a JSON string.
localStorage.setItem( 'demoFall2014', myObjectJson );

// To retrieve an item from localStorage, we just
// need the key it was stored under.
var retrievedObjectJson = localStorage.getItem( 'demoFall2014' );
console.log('retrievedObjectJson:', retrievedObjectJson);

// Convert from JSON string into a native JS Object Literal...
var retrievedObject = JSON.parse( retrievedObjectJson );
console.log('retrievedObject:', retrievedObject);