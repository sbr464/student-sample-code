module.exports = {
	createAutoIncrementer: function() {
		var counter = 0;
		return function() {
			return counter++;
		};
	}
};