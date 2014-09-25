// multiple optional arguments (using the arguments object)
var addAny = function(x, y) {
	var total = 0;
	for(var i=0; i<arguments; i++) {
		total += arguments[i];
	}

	return total;
}


addAny(1,2,3)
addAny(1,2,3, 10, 15, 100)

// single optional argument (relying on the fact that Javascript assigns the value undefined to any parameters that are not specified)
var concat = function(string1, string2, reverse) {
	if(reverse) {
		return string2 + string1;
	}
	else {
		return string1 + string2;
	}
}

concat('aww', 'yeah', false) // 'awwyeah'
concat('aww', 'yeah', true) // 'yeahaww'
concat('aww', 'yeah') // 'awwyeah'
