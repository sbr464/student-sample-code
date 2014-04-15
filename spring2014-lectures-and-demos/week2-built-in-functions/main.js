// STRING FUNCTIONS
console.log('----- STRINGS -----');

// indexOf( substr )
//	return -1 if not found
//	return index of string found
console.log('String indexOf:', 'hello world'.indexOf('l') );
// ^ String indexOf: 2 
console.log('String indexOf:', 'hello world'.indexOf('nope') );
// ^ String indexOf: -1

// substring
//	return the partial string from the given indexes
console.log('String substring:', 'hello world'.substring(4) );
// ^ String substring: o world 
console.log('String substring:', 'hello world'.substring(4, 7) );
// ^ String substring: o w

// split( separator )
//	convert a string into an array by breaking it up
//	by the given separator
console.log('String split:', 'hello world'.split(' ') );
// ^ String split: ["hello", "world"] 
console.log('String split:', 'hello world'.split('') );
// ^ String split: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

// toUpperCase() & toLowerCase()
//	convert case of entire given string
console.log('String case:', 'hEllo wOrLd'.toUpperCase() );
// ^ String case: HELLO WORLD 
console.log('String case:', 'hElLo World'.toLowerCase() );
// ^ String case: hello world 

// trim()
// remove any whitespace from beginning and end of string
console.log('String trim:', '     hello world   '.trim() );
// ^ String trim: hello world 


// ARRAY FUNCTIONS
console.log('----- ARRAYS -----');

// Array.isArray( object )
//	check if given object is an array
console.log('Array.isArray:', Array.isArray( 'hello world' ) );
// ^ Array.isArray: false 
console.log('Array.isArray:', Array.isArray( [0, 1, 2, 3] ) );
// ^ Array.isArray: true
console.log('Array.isArray:', Array.isArray( {a: 1, b: 2} ) );
// ^ Array.isArray: false 

// indexOf( term )
//	find index of given term in the array. -1 if not found
console.log('Array indexOf:', ['hi', 'bye'].indexOf('bye') );
// ^Array indexOf: 1 
console.log('Array indexOf:', ['hi', 'bye'].indexOf('nope') );
// ^Array indexOf: -1 

// slice( begin [, end] )
//	like "copy" for arrays, nondestructive
var testArray = ['hi', 'hello', 'bye'];
console.log('Array slice:',
	testArray.slice(1),
	testArray
);
// ^ Array slice: ["hello", "bye"] ["hi", "hello", "bye"] 

console.log('Array slice:',
	testArray.slice(1, 2),
	testArray
);
// ^ Array slice: ["hello"] ["hi", "hello", "bye"] 

// splice( begin [, end] )
//	like "cut" for arrays, destructive (modifies the original)
//	the optional 3rd+ parameters are items to be inserted where
//	items were removed.
var testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1),
	testArray
);
// ^ Array splice: ["hello", "bye"] ["hi"] 

testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1, 1),
	testArray
);
// ^ Array splice: ["hello"] ["hi", "bye"]

testArray = ['hi', 'hello', 'bye'];
console.log('Array splice:',
	testArray.splice(1, 1, 'test1', 'test2'),
	testArray
);

// join( separator )
//	join the items in the array together using the given
//	separator and return as a string
console.log('Array join: ', ['hello', 'world'].join(' ') );
// ^ Array join:  hello world 
console.log('Array join: ', ['hello', 'world'].join(' something ') );
// ^ Array join:  hello something world 

// concat( arr... )
//	join multiple arrays into one big array
var arr1 = ['hello', 'world'];
var arr2 = ['something', 'important'];
var arr3 = ['but', 'i', 'forget'];
console.log('Array concat: ', arr1.concat(arr2, arr3) );
// ^ Array concat:  ["hello", "world", "something", "important", "but", "i", "forget"] 

// reverse()
//	reverse the order of the whole array
console.log('Array join: ', ['hello', 'world'].reverse() );
// ^ Array join:  ["world", "hello"] 
console.log('Array join: ', ['hello', 'world'].reverse().join(' ') );
// ^ Array join:  world hello 
console.log('Array join: ',
	'Hello World'.split('').reverse().join('')
);
// ^ Array join:  dlroW olleH 

// sort([compareFunction(a, b)])
//	Allows you to sort the array.
//	By Default, not passing a compare function will sort
//		by converting each item to a string and doing a string comparison
//	See examples of custom sort functions below
var testArray = [5, 2, 10, 6, 3];
var testArray2 = ["a", "d", "f", "b"];
console.log('Array sort: ', testArray.sort() );
// ^Array sort:  [10, 2, 3, 5, 6] 

console.log('Array sort: ', testArray2.sort() );
// ^Array sort:  ["a", "b", "d", "f"] 

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
