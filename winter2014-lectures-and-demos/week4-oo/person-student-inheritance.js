// var Person = function() {}
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

Person.prototype.hello = function() {
	console.log('Hi! I\'m ' + this.name);
}

var person1 = new Person('Tom', 25);

/*
var obj = {};
var obj = new Object();

var arr = [];
var arr = new Array();
*/

var Student = function(name, age) {
	this.grade = 100;
	// calling the Person constructor with the context of the current student
	// "Everything you would normally do when creating a new Person, also do
	// for this student."
	Person.call(this, name, age);
};
Student.prototype = new Person();

var alice = new Student('Alice', 25);
var bob = new Student('Bob', 40);
