// abstract class / interface
var Shape = function() {
};
Shape.prototype.area = function() {
	console.log('area is not defined');
}

var Rectangle = function(w, h) {
	// instance variables
	// instance members
	// properties
	this.width = w;
	this.height = h;
};
Rectangle.prototype = new Shape();
Rectangle.prototype.area = function() {
	return this.width * this.height;
}

// static property/method
// Rectangle.customProperty = 12345;

var Circle = function(diameter) {
	this.width = diameter;
};
Circle.prototype = new Shape();
Circle.prototype.area = function() {
	var radius = this.width/2;
	return radius * radius * Math.PI; // PI*r^2
}

var rect1 = new Rectangle(5, 8);
console.log(rect1, rect1.area());

var circ = new Circle(5);
console.log(circ, circ.area());
