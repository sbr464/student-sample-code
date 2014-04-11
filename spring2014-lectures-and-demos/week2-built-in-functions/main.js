// STRING FUNCTIONS
console.log('----- STRINGS -----');

// indexOf( substr )
//	return -1 if not found
//	return index of string found
console.log('String indexOf:', 'hello world'.indexOf('l') );
console.log('String indexOf:', 'hello world'.indexOf('nope') );

// substring
//	return the partial string from the given indexes
console.log('String substring:', 'hello world'.substring(4) );
console.log('String substring:', 'hello world'.substring(4, 7) );

// split( separator )
//	convert a string into an array by breaking it up
//	by the given separator
console.log('String split:', 'hello world'.split(' ') );
console.log('String split:', 'hello world'.split('') );

// toUpperCase() & toLowerCase()
//	convert case of entire given string
console.log('String case:', 'hEllo wOrLd'.toUpperCase() );
console.log('String case:', 'hElLo World'.toLowerCase() );

// trim()
//	remove any whitespace from beginning and end of string
console.log('String trim:', '     hello world   '.trim() );



// ARRAY FUNCTIONS
console.log('----- ARRAYS -----');

// Array.isArray( object )
//	check if given object is an array
console.log('Array.isArray:', Array.isArray( 'hello world' ) );
console.log('Array.isArray:', Array.isArray( [0, 1, 2, 3] ) );
console.log('Array.isArray:', Array.isArray( {a: 1, b: 2} ) );

// indexOf( term )
//	find index of given term in the array. -1 if not found
console.log('Array indexOf:', ['hi', 'bye'].indexOf('bye') );
console.log('Array indexOf:', ['hi', 'bye'].indexOf('nope') );

// slice( begin [, end] )
//	like "copy" for arrays, nondestructive
var testArray = ['hi', 'hello', 'bye'];
console.log('Array slice:',
	testArray.slice(1),
	testArray
);
console.log('Array slice:',
	testArray.slice(1, 2),
	testArray
);

// splice( begin [, end] )
//	like "cut" for arrays, destructive (modifies the original)
//	the optional 3rd+ parameters are items to be inserted where
//	items were removed.
var testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1),
	testArray
);

testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1, 1),
	testArray
);

testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1, 1, 'test1', 'test2'),
	testArray
);

// join( separator )
//	join the items in the array together using the given
//	separator and return as a string
console.log('Array join: ', ['hello', 'world'].join(' ') );
console.log('Array join: ', ['hello', 'world'].join(' something ') );

// concat( arr... )
//	join multiple arrays into one big array
var arr1 = ['hello', 'world'];
var arr2 = ['something', 'important'];
var arr3 = ['but', 'i', 'forget'];
console.log('Array concat: ', arr1.concat(arr2, arr3) );


// reverse()
//	reverse the order of the whole array
console.log('Array join: ', ['hello', 'world'].reverse() );
console.log('Array join: ', ['hello', 'world'].reverse().join(' ') );
console.log('Array join: ',
	'Hello World'.split('').reverse().join('')
);

// sort([compareFunction(a, b)])
//	Allows you to sort the array.
//	By Default, not passing a compare function will sort
//		by converting each item to a string and doing a string comparison
//	See examples of custom sort functions below
var testArray = [5, 2, 10, 6, 3];
var testArray2 = ["a", "d", "f", "b"];
console.log('Array sort: ', testArray.sort() );
console.log('Array sort: ', testArray2.sort() );

// if fn(a,b) > 0, a comes first
// if fn(a,b) < 0, b comes first
// if fn(a,b) === 0, no change

// sort numerically
var numSort = function(a, b){
	return a - b;
}

// sort DESCENDING (inverted from default)
var otherSort = function(a,b){
	if(a === b)
		return 0;

	if(a < b)
		return 1;
	else
		return -1;
}

console.log('Array sort: ', testArray.sort(numSort) );
console.log('Array sort: ', testArray2.sort(otherSort) );


// sort objects on a custom property
var testObjects = [
	{propA: 10, propB: 'hello'},
	{propA: 2, propB: 'hey'},
	{propA: 20, propB: 'world'}
];

// numerically compare propA
var obSort = function(a, b){
	return a.propA - b.propA;
};
console.log('Array sort: ', testObjects.sort(obSort) );












