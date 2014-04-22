// A hiking trail.
var Trail = function(name, difficulty) {
	this.name = name;
	this.difficulty = difficulty;
};

// A person that likes to climb up mountains.
var Hiker = function(name, skill) {
	this.name = name;
	this.skill = skill;
};

Hiker.prototype.canClimb = function(trail) {
	return this.skill >= trail.difficulty;
};

// A tall place with trails.
var Mountain = function(name, elevation) {
	this.name = name;
	this.elevation = elevation;
	this.trails = [];
};

Mountain.prototype.addTrail = function(trail) {
	this.trails.push(trail);
};

Mountain.prototype.climbableTrails = function(hiker) {
	var trailList = this.trails.filter(function(trail) {
		return hiker.canClimb(trail);
	});
	return trailList;
};

// elegant implementation with bind
// Mountain.prototype.climbableTrails = function(hiker) {
// 	return this.trails.filter(hiker.canClimb.bind(hiker));
// };