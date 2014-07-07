// Person constructor
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

var Student = function(name, age, grade) {

	// 2. Invoke the superclass constructor with the required parameters
	Person.call(this, name, age);

	this.grade = grade;
};

// 1. Set up inheritance chain
Student.prototype = new Person();

// 3. Set proper constructor
Student.prototype.constructor = Student;


// test
var sarah = new Student('Sarah', 21, 100);
