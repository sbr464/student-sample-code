// looking at call:

var printName = function(){
	// console.log('context:', this);
	console.log('name:', this.name);
};

// Default context (window)
printName();

// Define a person
var person = {
	name: 'Chris'
};

// Define a person
var person2 = {
	name: 'Argus'
};

// Call the printName function and set the
// context to person
printName.call(person);

// Call the printName function and set the
// context to person2
printName.call(person2);

// Apply the printName function and set the
// context to person
printName.apply(person);


// Testing the difference with arguments

// Call with no context, passing several numbers
// as the arguments...
console.log( Math.max.call(null, 1, 10, 2, 5) );

// Apply with no context will take the given
// array as the entire arguments list...
var numbersList = [5, 4, 17, 2];
console.log( Math.max.apply(null, numbersList) );


// Bind:
var personPrint = printName.bind(person);
personPrint();

var personPrint2 = printName.bind(person2);
personPrint2();



// Previously lost context example

var myObj = {
	counter: 0,
	getIncrement: function(amt){
		var inc = function(){
			// Amount variable is inherited
			// because of scope
			this.counter += amt;
			console.log(this);
		};
		// Give back the function that's
		// already bound to the context of
		// the given object.
		return inc.bind(this);
	}
};

var incrementor = myObj.getIncrement(10);

incrementor();
incrementor();



// Fake version of jQuery event
/*function(e, callback){
	// callback.call(e.target, e);
	callback(e)
}


$('').on('click', function(e){
	$(e.target).text('success');
})*/