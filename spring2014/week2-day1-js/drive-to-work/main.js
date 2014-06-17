var isSunny = false;
var carInUse = false;

if(isSunny) {
	console.log('I\'m riding my bike to work!');
	// alert("I'm riding my bike to work!");
	/* 
	alert("I'm riding my bike to work!"); 
	alert("I'm riding my bike to work!"); 
	alert("I'm riding my bike to work!"); 
	*/
}
else if(carInUse) {
	console.log('I\'m taking the bus to work!');
}
else {
	console.log('I\'m driving to work!');
}

// Alternative:

if(isSunny) {
	alert('I\'m riding my bike to work!');
	// alert("I'm riding my bike to work!");
	 
	alert("I'm riding my bike to work!"); 
	alert("I'm riding my bike to work!"); 
	alert("I'm riding my bike to work!"); 
	
}
else {
	if(carInUse) {
		alert('I\'m taking the bus to work!');
	}
	else {
		alert('I\'m driving to work!');
	}
}