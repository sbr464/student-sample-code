// Using closure, create a function that takes in
// a target comparison value and returns a function
var getLessThan = function(targetNum){

	// This function takes advantage of being able
	// to keep track of the targetNum parameter and re-use
	// it. The result of calling getLessThan(10) will be a
	// function that checks if a given number is less than
	// the original number.
	return function(checkNum){
		return checkNum < targetNum;
	};
};

// lessThan8 is a function that takes in one argument
// and checks to see if it is less than 8
var lessThan8 = getLessThan(8);

// lessThan5 is similar to above, but instead checks
// againts 5.
var lessThan5 = getLessThan(5);

var original = [1,2,5,10,3,100];

var result8 = original.filter(lessThan8);
var result5 = original.filter(lessThan5);