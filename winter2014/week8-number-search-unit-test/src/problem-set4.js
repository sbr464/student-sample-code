var isDigit = function(c) {
	return c.length === 1 && !isNaN(parseFloat(c));
};

var numberSearch = function(s) {
	var total = 0;
	var digits = '';

	for(var i=0; i<s.length; i++) {
		if(isDigit(s[i])) {
			digits += s[i];
			// total += +s[i];
		}
		else if(digits.length > 0) {
			total += +digits;
			digits = '';
		}
	}

	total += +digits;

	return total;
};