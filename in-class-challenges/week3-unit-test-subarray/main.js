// parent: [1,2,3,4,5]
// child:  []
var subarray = function(parent, child) {
	var look = 0;

	if(child.length === 0) {
		return true;
	}

	for(var i=0; i<parent.length; i++) {
		if(child[look] === parent[i]) {
			look++;
			if(look === child.length) {
				return true;
			}
		}
		else {
			look = 0;
		}
	}

	return false;
};