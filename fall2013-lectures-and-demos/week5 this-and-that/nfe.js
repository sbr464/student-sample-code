// function expression
var test = function() {
	console.log('test');
};

// function declaration
function test() {
	console.log('test');
}

// named function expression
// (same as function expression but now the name shows up in the debugger!)
var test = function test() { // just use the same name as the variable
	console.log('test');
};
