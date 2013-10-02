var sections = {
	p1: 1245,
	p2: 0,
	p3: 150,
	p4: 5141
};

var printObject = function(o, valueFormatter) {
	for(var key in o) {
		var formattedValue = valueFormatter(o[key]);
		console.log(key + " = " + formattedValue);
	}
};

var formatSeconds = function(milliseconds) {
	return milliseconds/1000 + ' sec';
};

var formatNanoseconds = function(milliseconds) {
	return milliseconds*1000 + ' ns';
};

var excited = function(s) {
	return s + '!!!';
};

printObject(sections, excited);
