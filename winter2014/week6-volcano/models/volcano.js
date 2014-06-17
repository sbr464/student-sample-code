// mock data
var Volcano = function(name, location) {
	this.name = name;
	this.location = location;
	this.description = 'Located in this exotic, tropical locale, ' + this.name + ' is an exciting adventure that will make any trip unforgettable.';
};

var volcanoes = [
	new Volcano('Mauna Kea', 'Hawaii'),
	new Volcano('Halaeeikiaaea', 'Maui'),
	new Volcano('Fuji', 'Japan'),
	new Volcano('Arenal', 'Costa Rica')
];

// export model object
module.exports = {

	getAllVolcanoes: function() {
		return volcanoes.slice();
	},

	getVolcano: function(name) {
		var matchingVolcanoes = volcanoes.filter(function(v) {
			return v.name === name;
		});
		return matchingVolcanoes[0];
	}

};
