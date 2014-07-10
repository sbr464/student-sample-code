var add = function(x,y) {
	return x+y;
}

var finalSum = add(2,3);




var add2 = function(x,y) {
	return {
		sum: x+y
	};
}

var finalSum = add2(2,3).sum;
