var assert = function(a,b) {
  if(a !== b) {
    console.error('expected', a, 'to equal', b);
  }
  else {
    console.log('test passed!', a, 'equals', b);
  }
};

var assertDeepEquals = function(a,b) {
	var same = true;

	if(a.length !== b.length) {
		same = false;
	}
	else {
		for(var i=0; i<a.length; i++) {
			if(a[i] !== b[i]) {
				same = false;
				break;
			}
		}
	}

  if(same) {
    console.log('test passed!', a, 'equals', b);
  }
  else {
    console.error('expected', a, 'to equal', b);
  }
};