// a function that generates other functions would have a nested function definition
var greetingMaker = function(greeting) {

	// return a function expression
	return function(name) {

		// the inner function has a reference to greeting, which is a LOCAL variable in greetingMaker

		// normally greeting would get garbage collected when greetingMaker ends

		// however that would break this function expression! so CLOSURE ensures that it does not get garbage collected, and our nested function will continue to work as expected even after greetingMaker ends
		console.log(greeting + ' ' + name + '!');
	};
};

var sayHi = greetingMaker('Hi');
var sayBye = greetingMaker('Bye');

// console.log( sayHi('Kelsey') );
// console.log( sayBye('Kelsey') );

var names = ['tim', 'tammy', 'todd'];
names.forEach(sayBye);
