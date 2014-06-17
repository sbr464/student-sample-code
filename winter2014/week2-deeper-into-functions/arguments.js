// Using the arguments object to access unlimited arguments (beyond named parameters)
var concat = function() {
	var output = '';
	for(var i=0; i<arguments.length; i++) {
		output += arguments[i];
	}
	return output;
}

concat('a', 'b', 'c', 'd', 'e');

// Passing fewer arguments than named parameters
var add = function(x, y) {
	// y would be undefined for add(2);
	return x + y;
};

add(2);

var pluralize = function(word, count) {
	// default value (longer)
	if(count === undefined) {
		count = 1;
	}

	// default value (shorter) - be careful of falsey values
	//count = count || 1;

	if(count === 1) {
		return word;
	}
	else {
		return word + 's';
	}
}

pluralize('cow', 1)
pluralize('cow') // omitting the second argument

// test if something is an array
//(myArray instanceof Array)

// converting the arguments object to an array
var args = Array.prototype.slice.call(arguments);


