// Airport constructor
// initializer list: city
function Airport(city) {
	this.city = city;
	this.travelers = [];
	this.planes = [];
}

// new Airport('Boston')
// new Airport('Chicago')
module.exports = Airport;