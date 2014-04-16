var a = 5;
var b = 3;

var doSomething = function(x) {

	// declare a new local variable a (does not overwrite global a)
	// WARNING: if we leave off var, then this overwrites global a
	var a = 10;

	// a refers to local variable a (10)
	console.log('inner a:', a);

	// global a is 'hidden'
	// no way to access global a (5)

};

doSomething();

// global a was unaffected by local operations in doSomething
console.log('outer a:', a);

