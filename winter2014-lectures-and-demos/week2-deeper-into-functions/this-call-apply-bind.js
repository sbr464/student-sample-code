// 1. for global functions, the context (this) is the window object
var shout = function() {
	console.log('HEY!');
	console.log(this); // this refers to the 'context' of the containing function
}

// 2. for object methods, the context (this) is set to the host object
var person = {
	name: 'Shane',
	age: 10,
	sayHi: function() {
		console.log('hi');
		console.log(this);
	},
	addOne: function(n) {
		console.log(n+1);
		console.log(this);
	}
};

// 2.1 If you reassign a method, you lose the context!
var hihi = person.sayHi;
hihi(); // does not have original context (context is 'lost')

// 3. for jQuery event handlers, the context (this) refers to the element that fired the event
$('.mylink').on('click', function() {
	console.log(this); // this -> native element that was clicked (with class mylink)
					   // $(this) -> jQuery object of the element that was clicked
	
	this.text('sometext') // FAIL: native element objects, don't have jQuery methods
	$(this).text('sometext') // accessing the target element as a jQuery object

	var that = this;

	$('.mylist li').on('click', function() {
		$(this) // does NOT refer to .mylink anymore (we're in a different function)
		$(that) // refers to .mylink
	});
})

// 4. setting a custom context
var muppet = {
	name: "Elmo"
};

// 1. call invokes a function with a custom context
person.sayHi.call(muppet);

//myObject.foreignMethod()
hostObject.foreignMethod.call(myObject)
Array.prototype.slice.call(arguments)
person.sayHi.call(muppet)

// 2. apply invokes a function with a custom context and an argument list
person.count.call(muppet, 10, 11, 12);
person.count.apply(muppet, [10, 11, 12]);

// 3. bind returns a new function, equivalent to an original function with a fixed context
var hello = person.sayHi.bind(person)
