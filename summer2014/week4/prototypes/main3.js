var Truck = function(color) {
	if(color) {
		this.color = color;
	}
	this.iconType = 'truck';
	this.fuelLevel = 100;
};
Truck.prototype.drive = function() {
	this.fuelLevel -= 5;
	return this.fuelLevel;
};
Truck.prototype.color = 'red';
Truck.prototype.create = function() {
	this.el = $('<i>')
		.addClass('icon-' + this.iconType)
		.css('color', this.color);
	return this.el;
};
Truck.prototype.updateColor = function() {
	this.el.css('color', this.color);
}

var Ambulance = function() {
	this.iconType = 'ambulance';
};
Ambulance.prototype = new Truck('blue');
Ambulance.prototype.constructor = Ambulance;


var burritoTruck = new Truck();
$('body').append(burritoTruck.create());

var tofurkyTruck = new Truck();
$('body').append(tofurkyTruck.create());

var ambulance = new Ambulance();
$('body').append(ambulance.create());
