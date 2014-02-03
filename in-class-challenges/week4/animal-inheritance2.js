var Animal = function(name) {
	this.name = name;
};
Animal.prototype.move = function() {
	console.log(this.name + ' is moving...');
};

var Predator = function(name) {
	Animal.call(this, name);
};
Predator.prototype = new Animal();
Predator.prototype.attack = function(animal) {
	console.log(this.name + ' is hungry for ' + animal.name)
};

var lion = new Predator('Lion');
var gazelle = new Animal('Gazelle');
lion.move();
lion.attack(gazelle);

// var myanimal = new Animal();