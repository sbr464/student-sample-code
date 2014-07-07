// define a Student constructor
// it's just a normal function but it'll be used with the new keyword
// This constructor takes two parameters, name and school
var Student = function(name, school) {

	// set the name property of the new student instance to the value of the name parameter
	this.name = name;

	// set the school property of the new student instance to the value of the school parameter or, if it wasn't passed, the value 'RefactorU'
  this.school = school || 'RefactorU';

  // set the sayHi method of the new student instance
  this.sayHi = function() {
    console.log('Hi!');
  }
}

// test:
var sarah = new Student('Sarah');
var rafael = new Student('Rafael', 'gSchool');

console.log("Sarah object:");
console.log(sarah.name);
console.log(sarah.school);
sarah.sayHi();

console.log("Rafael object:");
console.log(rafael.name);
console.log(rafael.school);
rafael.sayHi();

