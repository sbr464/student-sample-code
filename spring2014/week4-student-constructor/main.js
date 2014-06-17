// Define the Person constructor ("class"). This is used in conjunction with the new keyword to create new instances of this class. 
var Person = function(name, age) {

	// assign the name that is passed in to the constructor to the instance property 'name'.
	this.name = name;

	this.age = age;
	this.city = 'Boulder';
};
// By default, classes inherit from Object, like this:
// Person.prototype = new Object();

// By defining a method on the Person prototype, all instances of Persons will have access to it. This is more efficient that defining the function in the Person constructor (this.getYearBorn = ...) since there is only one getYearBorn function shared by all instances.
Person.prototype.getYearBorn = function() {
	var today = new Date();
	return today.getFullYear() - this.age; // 'this' refers to the current instance
};

/** The Student class. */
var Student = function(name, age) {

	// invoke the superclass's constructor
	// technically what 'call' does is invoke a function and set the execution context ('this')
	// ***this is one of the three required pieces of prototypal inheritance***
	Person.call(this, name, age);

	// set the grades property on the instance
	this.grades = [];
};

// The most important part of setting up inheritance is creating a 'link' to the super class. In Javascript this is done by setting the class's prototype to an instance of the super class. Creating a new instance here is not very intuitive; it's never used other than to look up prototype properties.
// ***this is one of the three required pieces of prototypal inheritance***
// Order matters! These must come before any properties or methods are added to the Student prototype
Student.prototype = new Person();

// for completeness, we should also set the constructor property
// ***this is one of the three required pieces of prototypal inheritance***
Student.prototype.constructor = Student;

/** Prompts the user for the student's grade. */
// This is defined on the Student prototype so that all students have access to this function.
Student.prototype.takeTest = function() {
	var score = prompt('What did you receive on the test?');

	// 'this' refers to the current instance of a student, which depends on who is calling the function
	this.grades.push(score);
};

/** Return the average of all grades. */
Student.prototype.currentGrade = function() {
	var total = 0;
	for(var i=0; i<this.grades.length; i++) {
		total += this.grades[i];
	}
	return total/this.grades.length;
};

var Classroom = function(teacher, name, subject) {
	this.students = [];
	this.name = name;
	this.subject = subject;
	this.teacher = teacher;
};

var Teacher = function(fullName, age, subjects) {
	Person.call(this, fullName, age); // inheritance step #1
	this.subjects = subjects;
}
Teacher.prototype = new Person(); // inheritance step #2
Teacher.prototype.constructor = Teacher; // inheritance step #3

// create a couple instances of Students by using the new keyword along with the constructor
var tom = new Student('Tom', 35);
var sarah = new Student('Sarah', 30);

tom.grades.push(95);
tom.grades.push(85);
tom.grades.push(100);

sarah.grades.push(100);
sarah.grades.push(101);
sarah.grades.push(100);

var raine = new Teacher('Raine', 29, ['Javascript', 'C++', 'Racket']);
var chris = new Teacher('Chris', 27, ['Javascript', 'C#', 'ActionScript']);
var sean = new Teacher('Sean', 35, []);

var teachers = [raine, chris, sean];

var webDev = new Classroom(raine, 'Web Development', 'Javascript');
var uav = new Classroom(null, 'NodeCopter', 'Javascript');

// find all teachers that can teach the uav class
var uavQualifiedTeachers = teachers.filter(function(teacher) {
  return teacher.subjects.indexOf(uav.subject) !== -1;
});

// this could be abstracted into a generic function that finds teachers that can teach any class
var findTeachers = function(teachers, classroom) {
	return teachers.filter(function(teacher) {
	  return teacher.subjects.indexOf(classroom.subject) !== -1;
	});
}
