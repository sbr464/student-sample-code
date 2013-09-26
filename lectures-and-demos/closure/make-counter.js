/** Create a counter function, which when invoked will increment
	  and return a counter that starts at 0. */
var makeCounter = function() {

	var counter = 0;

	return function() {
		counter++;
		return counter;
	};

};

var a = makeCounter();
var b = makeCounter();

a();
a();
a();

b();
b();