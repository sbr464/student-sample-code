var defineGravitationalWave = function() {

	// private
	var constants = {
		g: 10.532,
		h: 4.1,
		i: 70002555
	};

	var process = function(x) {
		return Math.floor(x) % 1000;
	};

	// public
	return {
		calculateWave: function(x, y, z) {

			// we have access to process and constants through closure

			return process(x * constants.g + 
				y * constants.h +
				z * constants.i);
		},

		calculateSuperWave: function() {
			return Infinity;
		}
	};

};

var GravitationalWave = defineGravitationalWave();