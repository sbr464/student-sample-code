var GravitationalWave = {

	constants: {
		g: 10.532,
		h: 4.1,
		i: 70002555
	},

	process: function(x) {
		return Math.floor(x) % 1000;
	},

	calculateWave: function(x, y, z) {

		// do other stuff

		return this.process(x * this.constants.g + 
			y * this.constants.h +
			z * this.constants.i);
	}

};
