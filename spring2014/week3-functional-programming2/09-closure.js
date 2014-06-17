var makeCounter = function() {

	var counter = 0;

	// "increment has closure over counter"

	// because of CLOSURE, increment maintains a reference to counter even after the makeCounter scope ends
	var increment = function() {
		counter++;
		console.log(counter);
	};

	return increment;
};

var a = makeCounter();

// after makeCounter exits, all local variables without references are garbage collected

// HOWEVER, since increment DEPENDS ON counter to function, it holds a reference to it.

// This is called CLOSURE.

// CLOSURE is the mechanism in Javascript that allows an inner scope to keep references to variables in an outer scope that has already terminated.

a(); // prints 1
a(); // prints 2
a(); // prints 3

console.log('Now make b...');

var b = makeCounter();
b(); // prints 1
b(); // prints 2

a(); // prints 4
