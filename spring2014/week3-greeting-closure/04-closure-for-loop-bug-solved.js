// Overview: setTimeout
// exucutes function f AFTER n milliseconds have passed
// setTimeout(f, milliseconds);

// if we define the setTimeout call that takes i as a parameter, then i will be 'locked in' because it is a primitive that's copied by value
var schedule = function(x) {
	setTimeout(function() {
		console.log('It\'s been ' + x + ' seconds.');
	}, x * 1000);
};

// The closure-for-loop 'bug'
for(var i=1; i<=3; i++) {
	schedule(i);
}

