// Object Literal Instances
var josh = {
	name: 'Josh',
	color: 'Blue'
};
var chris = {
	name: 'Chris',
	color: 'Blue'
};

// More organized, but still has no class usage,
// essentially we are still creating object literals
var Student = function(name, color){
	return {
		name: name,
		color: color
	};
};

var josh = Student('Josh', 'Blue');
var chris = Student('Chris', 'Green');


// Use classes to optimize sharing of code
// and better organization of complex systems
var Person = function(name, color){
	// If this function was called but not
	// given any arguments, just return without
	// trying to set any properties
	if(name === undefined) return;
	// When we use "this", it means the new
	// instance of this class (i.e. A student)
	this.fullName = name;
	this.username = name.split(' ').join('_').toLowerCase();
	this.color = color;
	this.id = Math.random();
};
Person.prototype.sayHey = function() {
	console.log(this.fullName + ': Hey!');
};
Person.prototype.create = function() {
	// If this instance already has a property
	// of element, just return its value.
	if(this.element){
		return this.element;
	} else {
		this.element = $('<h2>' + this.fullName + '</h2>');
		return this.element;
	}
};

var Instructor = function(name, color, experienced){
	Person.call(this, name, color);

	// my own custom props
	this.experienced = true;
};
// inherit the prototype set on the Person class
Instructor.prototype = new Person();
// Replace the constructor property back to the real one
Instructor.prototype.constructor = Instructor;

// override the sayHey method: Will "hide" or
// essentially override the original one on the
// lower tiers of the inheritance chain
Instructor.prototype.sayHey = function() {
	console.log(this.fullName+': HELLLLLOOOOO');
};

var josh = new Person('Josh Kneeland', 'Blue');
var chris = new Instructor('Chris Rolfs', 'Green');

console.log('Josh:');
console.dir(josh);

console.log('Chris:');
console.dir(chris);

// josh.sayHey();
// chris.sayHey();

var people = [josh, chris];
people.map(function(person){
	person.sayHey();
});