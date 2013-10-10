// Garden is a constructor
// Garden is a type of object
// Garden is a class (not technically accurate in Javascript- but pervasive)
// flowers : array of Flower objects
// bees : array of Bee objects
var Garden = function(flowers, bees) {
	this.bees = bees || [];
	this.flowers = flowers || [];
};

Garden.prototype.grow = function() {

	// this ALWAYS refers to an instance
	this.bees.push(new Bee());
	this.flowers.push(new Flower('red'));
};

// color : string
var Flower = function(color) {
	// this.color is an instance variable (member variable, property)
	// color is a parameter
	this.color = color;
	this.pollinated = false;
};

Flower.prototype.bloom = function() {
	if(this.pollinated) {
		console.log('A beautiful flower!');
	}
	else {
		console.log('Waiting for love...');
	}
};

var Bee = function() {
};

// method
Bee.prototype.buzz = function() {
	console.log('buzzzzz');
};

// flower : Flower
Bee.prototype.pollinate = function(flower) {
	flower.pollinated = true;
};

// create flowers and bees
var myFlowers = [];
var myBees = [];
for(var i=0; i<100; i++) {
	var newFlower = new Flower('red');
	myFlowers.push(newFlower);
}
for(var i=0; i<20; i++) {
	var newBee = new Bee();
	myBees.push(newBee);
}

var secretGarden = new Garden(myFlowers, myBees);
secretGarden.grow();
secretGarden.grow();
secretGarden.grow();
secretGarden.grow();
secretGarden.grow();
console.log(secretGarden);

var rose = new Flower('red');
var tulip = new Flower('yellow');

console.log(rose);
console.log(tulip);

var bee = new Bee();
bee.buzz();
bee.pollinate(tulip);

rose.bloom();
tulip.bloom();

console.log(secretGarden.bees[17]);
secretGarden.bees[17].buzz();


var Swarm = function(queen, workers) {
	this.queen = queen;
	this.workers = workers || [];
}

var queen = new Bee();
var worker1 = new Bee();
var worker2 = new Bee();
var worker3 = new Bee();
var swarm = new Swarm(queen, [worker1, worker2, worker3]);

// adding UI might look like this...
$('#add-bee').on('click', function() {
	swarm.workers.push(new Bee());
})


