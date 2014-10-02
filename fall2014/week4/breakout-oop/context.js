
// Looking at context:
var test = {
	a: function(){
		console.log('a:', this);
		var t = function(){
			console.log('t:', this);
		};
		t();
	}
};

// "a" is executed in the context of
// the test object
// a: test
// t: window
test.a();

// "a" is referenced by "b," which
// is executed in the global context,
// so both "this's" will be the window
// a: window
// t: window
var b = test.a;
b();


var test = {
	a: function(){
		console.log('a:', this);
		var t = function(){
			console.log('t:', this);
		};
		t.call(this);
	}
};

// "a" is executed on the context of
// test, but now that "t" is using call,
// the context can be forced
// a: test
// t: test
test.a();

// "a" is referenced by "b," which
// is executed in the global context,
// so both "this's" will be the window
// a: window
// t: window
var b = test.a;
b();


// We can fix the "b" issue by using bind
// a: test
// t: test
var b = test.a.bind(test);
b();