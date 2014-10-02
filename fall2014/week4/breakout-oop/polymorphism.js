//////////////////////////////
// QUICK POLYMORPHISM THING //
//////////////////////////////

var testFunc = function(a, b){
	// If "a" came in as an array...
	if(Array.isArray(a)){
		// Just total up everything in the array and return it
		var total = 0;
		for(var i = 0; i < a.length; i++){
			total += a[i];
		}
		return total;
	} else {
		// This will happen if "a" did NOT come in as an array
		return a + b;
	}
};
// Call testFunc with two parameters of numbers
testFunc(10, 20);
// Call testFunc with one parameter that is an array
testFunc([10, 20, 30]);
