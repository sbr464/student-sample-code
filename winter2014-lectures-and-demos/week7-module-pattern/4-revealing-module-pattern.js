// Revealing Module Pattern

// Immediately Invoked Function Expression
// IIFE
// (self-invoked anonymous function [SIAF])
var GravitationalWave = (function() {

	// private
	var constants = {
		g: 10.532,
		h: 4.1,
		i: 70002555
	};

	var process = function(x) {
		return Math.floor(x) % 1000;
	};

	var calculateWave = function(x, y, z) {
		console.log(this);
		return process(x * constants.g + 
			y * constants.h +
			z * constants.i);
	};

	var calculateSuperWave = function() {
		return superSecretCalculate(100);
	};

	var superSecretCalculate = function(y) {
		console.log(this);
		return process(y);
	};

	// public
	return {
		"process": process,
		"calculateWave": calculateWave,
		"calculateSuperWave": calculateSuperWave
	};

})();
