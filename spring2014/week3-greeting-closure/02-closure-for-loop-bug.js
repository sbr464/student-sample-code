// Overview: setTimeout
// exucutes function f AFTER n milliseconds have passed
// setTimeout(f, milliseconds);

// The closure-for-loop 'bug'
for(var i=1; i<=3; i++) {

	// schedule a function to be called
	// in i seconds

	// the program does NOT wait, but rather continues on, and the function will 'jump in' at the right time

	// (The 'event loop' is responsible for having asynchronous code 'jump in' at a different time)
	setTimeout(function() {
		console.log('It\'s been ' + i + ' seconds.');
	}, i * 1000);

}

// if we had more code here, it would start running as soon as the for loop completed

