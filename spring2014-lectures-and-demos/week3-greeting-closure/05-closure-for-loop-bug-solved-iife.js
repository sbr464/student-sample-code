// Overview: setTimeout
// exucutes function f AFTER n milliseconds have passed
// setTimeout(f, milliseconds);

// The closure-for-loop 'bug'
for(var i=1; i<=3; i++) {

	// you can do the same thing with an anonymous function
	// (this is called an Immediately Invoked Function Expression (IIFE))
	(function(x) {

		setTimeout(function() {
			console.log('It\'s been ' + x + ' seconds.');
		}, x * 1000);

	})(i);
}

