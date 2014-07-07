var Athlete = function(fatigue, height, width) {
	this.fatigue = fatigue;
	this.height = height;
	this.weight = width;

	this.warmUp = function() {
		console.log('I\'m getting really warm!');
	}
};

var Rollerblader = function(fatigue, height, width, isWearingHelmet, skateType) {
	Athlete.call(this, fatigue, height, width)
	// this.fatigue = fatigue;
	// this.height = height;
	// this.width = width;

	this.isWearingHelmet = isWearingHelmet;
	this.skateType = skateType;
};
Rollerblader.prototype = new Athlete();
Rollerblader.prototype.constructor = Rollerblader;

var Swimmer = function(fatigue, height, width, breath) {
	Athlete.call(this, fatigue, height, width)

	this.breath = breath;
};
Swimmer.prototype = new Athlete();
Swimmer.prototype.constructor = Swimmer;
