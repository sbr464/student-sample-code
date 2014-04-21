/** The Student class. */
var Student = function(name) {
	this.name = name;
	this.grades = [];

	/** Prompts the user for the student's grade. */
	this.takeTest = function() {
		var score = prompt('What did you receive on the test?');
		this.grades.push(score);
	};

	/** Return the average of all grades. */
	this.currentGrade = function() {
		var total = 0;
		for(var i=0; i<this.grades.length; i++) {
			total += this.grades[i];
		}
		return total/this.grades.length;
	};
};

var Classroom = function(teacher, name, subject) {
	this.students = [];
	this.name = name;
	this.subject = subject;
	this.teacher = teacher;
};

var Teacher = function(fullName, subjects) {
	this.name = fullName;
	this.subjects = subjects;
}

var tom = new Student('Tom');
var sarah = new Student('Sarah');

tom.grades.push(95);
tom.grades.push(85);
tom.grades.push(100);

sarah.grades.push(100);
sarah.grades.push(101);
sarah.grades.push(100);

var raine = new Teacher('Raine', ['Javascript', 'C++', 'Racket']);
var chris = new Teacher('Chris', ['Javascript', 'C#', 'ActionScript']);
var sean = new Teacher('Sean', []);

var teachers = [raine, chris, sean];

var webDev = new Classroom(raine, 'Web Development', 'Javascript');
var uav = new Classroom(null, 'NodeCopter', 'Javascript');

// find all teachers that can teach the uav class
teachers.filter(function(teacher) {
  return teacher.subjects.indexOf(uav.subject) !== -1;
});

// this could be abstracted into a generic function that finds teachers that can teach any class
var findTeachers = function(teachers, classroom) {

	return teachers.filter(function(teacher) {
	  return teacher.subjects.indexOf(classroom.subject) !== -1;
	});

}
