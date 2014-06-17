var add = function(x,y) {
	// if any parameters are not specified, they are set to undefined
	return x + y;
};

// tries to add 2 + undefined = NaN
// console.log(add(2));

// if you pass more arguments than parameters, additional arguments are ignored
// console.log(add(2, 3, 4))

var addMore = function(x,y) {

	// arguments object is an array-like object
	// 1. has numeric indices
	// 2. has a length property

	// console.log(arguments.length);

	// we can access arguments by index
	// console.log(arguments[0] + arguments[1] + arguments[2] + arguments[3]);

	// we can also loop over all arguments
	var total = 0;
	for(var i=0; i<arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

console.log(addMore(2, 3, 4, 5));