var constants = {
	g: 10.532,
	h: 4.1,
	i: 70002555
};

var process = function(x) {
	return Math.floor(x) % 1000;
};

var calculateWave = function(x, y, z) {

	// do other stuff

	return process(x * constants.g + 
		y * constants.h +
		z * constants.i);
};

