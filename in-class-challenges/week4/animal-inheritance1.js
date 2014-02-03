var Animal = function(name) {
	this.name = name;
	this.move = function() {
		console.log(this.name + ' is moving...');
	}
};

var Predator = function(name) {
	Animal.call(this, name);
	this.attack = function(animal) {
		console.log(this.name + ' is hungry for ' + animal.name)
	}
};
Predator.prototype = new Animal();

var lion = new Predator('Lion');
var gazelle = new Animal('Gazelle');
lion.move();
lion.attack(gazelle);

// var myanimal = new Animal();