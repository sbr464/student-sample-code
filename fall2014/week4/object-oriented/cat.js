// Create a Cat class. Classes should start with
// a capital letter.
// This function is called the Constructor
var Cat = function(color, name){

	// Take the given color and assign it
	// to the color property of the instance
	// that is created.
	this.color = color;
	this.name = name;

	// one way to add a method:
	this.meow = function(){
		console.log('Meow...');
	};
};

// Using the prototype to define methods on instances.
// Each instance of a Cat will have this method available.
Cat.prototype.sleep = function(){
	// Access the value of this cats name and print it to console
	console.log('Cat '+ this.name + ' is sleeping...');
};



// Create an instance of a Cat. Instances start
// with lowercase, like our other variables.
var myCat = new Cat('black', 'Arnold');
var otherCat = new Cat('Peach Puff', 'Princess');

// Call the "sleep" method on a cat
myCat.sleep();

// Call the "meow" method
otherCat.meow();