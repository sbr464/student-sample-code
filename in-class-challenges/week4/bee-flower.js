var Insect = function() {

};

var Bee = function() {
};
Bee.prototype = new Insect();
Bee.prototype.buzz = function() {
	console.log('buzzzzzzz');
};
Bee.prototype.pollinate = function(flower) {
	flower.pollinated = true;
};

var Flower = function(color) {
	this.color = color;
	this.pollinated = false;
};


var Ant = function() {

};
Ant.prototype = new Insect();

var bumble = new Bee();
var rose = new Flower('red');

console.log('Created', rose);
bumble.pollinate(rose);
console.log('Pollinated', rose);