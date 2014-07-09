var Truck = function(color) {

	// initializer
	this.color = color;
	this.iconType = 'truck';

	this.create = function() {
		var el = $('<i>')
			.addClass('icon-' + this.iconType)
			.css('color', this.color);
		return el;
	}

};

var Ambulance = function() {
	this.iconType = 'ambulance';
}
Ambulance.prototype = new Truck('blue');
Ambulance.prototype.constructor = Ambulance;


var burritoTruck = new Truck('red');
$('body').append(burritoTruck.create());

var ambulance = new Ambulance();
$('body').append(ambulance.create());
