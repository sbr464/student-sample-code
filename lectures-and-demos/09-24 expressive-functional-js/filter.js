var names = ['raine', 'matt', 'chris', 'sean', 'clint'];

// procedural
var output = [];

for(var i=0; i<names.length; i++) {
	if(names[i] !== 'raine') {
		output.push(names[i]);
	}
}

console.log(output);


// functional
var filter = function(arr, f) {
	var output = [];

	for(var i=0; i<arr.length; i++) {
		if( f(arr[i]) ) {
			output.push(arr[i]);
		}
	}

	return output;
};

var isNotRaine = function(s) {
	/*if(s !== 'raine') {
		return true;
	}
	else {
		return false;
	}*/
	//return s !== 'raine' ? true : false;
	return s !== 'raine';
};

var filteredNames = filter(names, isNotRaine);
console.log(filteredNames);
