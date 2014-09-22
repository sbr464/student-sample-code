var adder = function(a, b){
	console.log('a:', a);
	console.log('b:', b);

	// Pull all arguments passed to this function,
	// regardless of them being named as parameters
	// or not.
	console.log('arguments:', arguments);
	console.log('arguments[3]:', arguments[3]);

	return a + b;
};

// Will print out NaN because in our function,
// "b" will come in as undefined
console.log( adder(5) );

// Function will still work even though we've
// given it more than the number of named parameters.
// The additional arguments can be referenced via the
// "arguments" keyword inside the function
console.log( adder(5, 10, 20) );
console.log( adder(5, 10, 20, 'hello', {a: 10}, function(){console.log('test')}) );

// Add a slash before the line below to toggle between functionalities
/*
var starterValue = 'I actually set this';
/*/
var starterValue;
//*/

// Using the || with a may-be-undefined variable first will
// use the may-be-undefined value if it is defined OR it will
// use the value passed after the ||
console.log( 'Starter Value:', starterValue || 'Default value' );


// CALLBACKS

// setTimeout
var delayedFunction = function(){
	console.log('setTimeout: I was delayed');
};
// 2000ms = 2s * 1000ms
var delay = 2000;

// Browser will execute this function for us
// which makes it a callback.
setTimeout(delayedFunction, delay);


// setInterval - assigning this to a variable will store
// 			a reference to the ID the browser has given to
// 			the interval itself, which we can later use to
// 			stop the repeating.
var intervalId = setInterval(function(){
	console.log('setInterval: I am repeating and delayed');
}, delay);

// Use setTimeout to clear our interval after
// 10 seconds.
setTimeout(function(){
	// Clear the given interval by its id
	clearInterval(intervalId);
}, 10000);
