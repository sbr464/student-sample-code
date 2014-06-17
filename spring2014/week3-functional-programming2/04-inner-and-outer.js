var a = 5;
var b = 3;

console.log('global scope:', a,b);

// parameters are local to the function
var doSomething = function(x) {

	// also a local variable
	var y = 100;

	// inner scopes (nested functions) have access to all variables in outer scopes (including global)
	console.log('doSomething:', a,b,x);

	if(x === 100) {
		doSomething(101); // recursion
	}

	console.log('How about now?', x);

};

doSomething(100);
// doSomething(101);

// x is local to doSomething, not global
// console.log('x after doSomething:', x);