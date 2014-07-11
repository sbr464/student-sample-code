// add all arguments (must be numbers) and return the total
// Usage: add(1,2,3,5,6,7)
var add = function() {

	// now we can take advantage of native array methods like .reduce
	return args.reduce(function(a,b) { return a+b; })

	// convert the arguments object to an array, starting at index 1
	var args = Array.prototype.slice.call(arguments);

	// traditional implementation
	// var total = 0;
	// for(var i=0; i<arguments.length; i++) {
	// 	total += arguments[i];
	// }
	// return total;
}
