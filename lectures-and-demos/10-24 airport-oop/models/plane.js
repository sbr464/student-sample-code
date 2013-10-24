// Plane constructor
function Plane(seats, weightCapacity, fuelCapacity, fuelLevel) {
	this.seats = seats;
	this.weightCapacity = weightCapacity;
	this.fuelCapacity = fuelCapacity;
	this.fuelLevel = fuelLevel;

	this.passengers = [];
	this.crew = [];
}

module.exports = Plane;