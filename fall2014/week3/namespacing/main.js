
// These will be attached to the global namespace,
// which can "pollute" the space and possibly cause
// conflicts with other scripts that use similar variables
var name = 'Chris';
var getUsers = function(){
	return ['Chris', 'Joe', 'Max'];
};

// Use a namespace pattern to protect global leaking:
// Unlike the above, we've put our variables behind a
// single access point, so we only have one point of
// concern for pollution instead of the 2+ we had above.
var App = {
	name: 'Chris',
	getUsers: function(){
		return ['Chris', 'Joe', 'Max'];
	}
};
// The values are still accessible, but now require
// access through the App namespace
console.log( App.name );
console.log( App.getUsers() );

// Possible real-world example
/*
$(document).on('ready', function(){
	// On document ready, we would call the initializer
	// functions on our app namespace.
	App.init();
	App.setupEvents();
	App.render( $('.container') );
});
*/

// Revealing Module Pattern:
// 		Works by enclosing variables and functions inside a
// 		common function/scope unlike the plain object above.
// 		This makes our code a bit cleaner and easier to manage.
// 		It also becomes part of the concept of privacy in JS,
// 		which is to say that a variable defined in a function
// 		will be inaccessible to any parent scope.
var AppBuilder = function(){
	// Considered a private method because
	// no one but this function scope and its
	// children can access it. Essentially,
	// there is no way for a user or developer
	// to access this function outside the app
	// definition.
	var printUsers = function(){
		console.log( getUsers().join(' and ') );
	};

	// These variables are written as private (with no access),
	// but we reveal them to whoever needs them later on
	var name = 'Chris';
	var getUsers = function(){
		return ['James', 'Colin'];
	};

	// Reveal some values to whoever calls this
	// function by exposing specific parts. Whoever
	// calls this AppBuilder function will have access
	// to this object as a sort of rosetta stone; a lookup
	// table that translates the keys of the object (what
	// outside code has access to) to the values of the object
	// (what internals to this scope have access to)
	return {
		users: getUsers,
		name: name
	};
};
var App = AppBuilder();

// IIFE:
// 	Immediately Invoked Function Expression
// 	Create and execute a function on the spot
(function(){
	console.log('I am invoked');
})();

// IIFE with parameters
(function(msg){
	console.log(msg);
})('Hello World');


// ForLoop issue with race conditions
for (var i = 0; i < 5; i++) {
	// console.log(i);
	
	// Using setTimeout inside a for loop
	// ensures that the loop will complete
	// executing before the first timeout
	// calls back. This is considered a race
	// condition where our setTimeout is racing
	// against the for loop (which does not create
	// its own scope) and the setTimeout will always lose.
	/*setTimeout(function(){
		console.log(i);
	}, 1000 * i);*/
	
	// Use an IIFE to protect scope.
	// By passing "i" through to this
	// scope, we can retain its value
	// even in the setTimeout call. This
	// bypasses the race condition by encapsulating
	// the setTimeout logic in a closure that will
	// retain the original value of "i" at loop-time.
	(function(index){
		setTimeout(function(){
			console.log(index);
		}, 1000 * index);
	})(i);

	/*
		// Does the same as above but
		// with more steps
		var timerFunc = function(){
			setTimeout(function(){
				console.log(index);
			}, 1000 * index);
		};
		timerFunc(i);
	*/
};
console.log(i);

// Revealing Module Pattern with an IIFE:
// 		We don't need to call this function
// 		separately and we only care about running
// 		it once, so the IIFE will wrap the module
// 		and execute it immediately.
var App = (function(){
	var name = 'Cool App';
	var printName = function(){
		console.log(name);
	};
	// Reveal parts of this function.
	// In this case, outside code will
	// only have access to the "printName"
	// function declared internally here
	return {
		printName: printName
	};
})();

console.log(App);