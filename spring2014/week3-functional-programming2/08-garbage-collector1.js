var a = 5;
var b = 3;

var doSomething = function(x) {

	var arr = [1,2,3];
	return arr;

};

var result = doSomething();
console.log(result);


// after doSomething exits, arr was returned, so the global scope has a reference to it, and it can't be garbage collected