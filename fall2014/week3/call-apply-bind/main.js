// Default context: window
console.log(this);

var myObj = {
	counter: 0,
	increment: function(){
		// This is the object (myObj)
		console.log('myObj:', this);

		var inc = function(amt){
			
			// This is the window again
			console.log('inc:', this);
		};
		inc(10);
	}
};
myObj.increment();