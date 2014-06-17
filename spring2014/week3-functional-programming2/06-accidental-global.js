var doSomething = function() {

	// without var, creates a global variable
	// BAD PRACTICE
	c = 10;
	console.log('inner c', c);
};

doSomething();

// whoops! we didn't think c would be defined here but it is
console.log('outer c', c);

