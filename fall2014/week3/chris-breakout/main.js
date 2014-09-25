
// What is "this" at the global level? It's the window.
console.log('Global This:', this);

var testFunc = function(){
	console.log('Test Func This:', this);
};

// "this" will be the window as well...
testFunc();

var testOb = {
	method: function(){
		// Since "this" is being accessed from inside
		// a method on an object, "this" will be the
		// object instead of the window
		console.log('Method This:', this);

		var innerFunc = function(){
			// "This" is NOT inherited, so we will
			// need to use call, apply, or bind to
			// give it value
			console.log('Inner This:', this);
		};

		// non-inherited "this"
		// innerFunc();
			
		// Force a context to innerFunc using call or apply
		// innerFunc.call(this);
		innerFunc.apply(this);
	}
};
testOb.method();


// Basic example of jQuery events where they actually
// specify the context for us
$('button').on('click', function(){
	console.log(this);
});

// behind the scenes:
var $ = {
	on: function(eventName, callback){
		document.addEventListener(eventName, function(eventArgs){
			callback.call(eventArgs.target, eventArgs);
		});
	}
}

// A sample printVal function that prints a message and a context
var printVal = function(message){
	console.log('PrintVal:', message, this);
};

var temp = {
	a: 10,
	b: 'test'
};
var temp2 = {
	c: 30
};

printVal.call(temp, 'Hello');
printVal.apply(temp, ['Goodbye']);

var printTemp = printVal.bind(temp, 'forced message');
var printTemp2 = printVal.bind(temp2);

printTemp();
printTemp.call(temp2);
printTemp2('runtime message');
printVal();




$('.btn').on('click', function(){
	var originalButton = this;
	$(this).find('.save').on('click', function(){
		this??
		originalButton.remove()
	});

})

// Context can be set to a function if you need to
var caller = function(){
	this();
};
caller.call(function(){
	console.log('thing one');
});