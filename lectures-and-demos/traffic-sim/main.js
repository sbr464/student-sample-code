var unit = 25;

var Street = function() {
	this.cars = [];
	this.lights = [];

	this.create = function() {
		var el = $('<div class="street"></div>');
		for(var i=0; i<this.cars.length; i++) {
			el.append(this.cars[i].create());
		}
		for(var j=0; j<this.lights.length; j++) {
			el.append(this.lights[j].create());
		}
		return el;
	}

	this.act = function() {
		for(var i=0; i<this.cars.length; i++) {
			this.cars[i].act();
		}
		for(var j=0; j<this.lights.length; j++) {
			this.lights[j].act();
		}
	};
};

var Car = function(x) {
	this.x = x;
	this.create = function() {
		var el = $('<div class="car glyphicon glyphicon-user"></div>');
		el.css('left', this.x * unit);
		return el;
	};

	this.act = function() {
		this.x++;
	}
};

var Light = function(x) {
	this.cycle = ['red', 'yellow', 'green'];
	this.x = x;
	this.color = 'red';
	this.create = function() {
		var el = $('<div class="light glyphicon glyphicon-stop"></div>');
		el.css({
			left: this.x * unit,
			color: this.color
		});
		return el;
	};

	this.act = function() {
		var colorIndex = this.cycle.indexOf(this.color);
		this.color = this.cycle[(colorIndex+1) % this.cycle.length];
	};
};

var clear = function() {
	$('body').empty();
};

var render = function(el) {
	$('body').append(el);
}

$(function() {

	var street = new Street();
	street.cars = [
		new Car(2),
		new Car(5),
		new Car(6),
		new Car(7),
		new Car(10)
	];
	street.lights = [
		new Light(5),
		new Light(10),
		new Light(15),
		new Light(20)
	];

	setInterval(function() {
		street.act();
		clear();
		render(street.create());
	}, 500);
});
