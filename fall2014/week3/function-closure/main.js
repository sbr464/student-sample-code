var adder = function(x){
	return function(y){
		// x is still available from parent scope,
		// while y is defined when this function
		// body is executed
		return x + y;
	};
};

// Same as above, but a clearer use of variables
/*var adder = function(x){
	var actualAdder = function(y){
		return x + y;
	};
	return actualAdder;
}*/

var add5 = adder(5);
console.log('add5:', add5);

console.log('add5(10):', add5(10));
console.log('add5(30):', add5(30));

var add10 = adder(10);
console.log('add10:', add10);

console.log('add10(10):', add10(10));
console.log('add10(30):', add10(30));


/*for(var i = 0; i < 5; i++){
	setTimeout(function(){
		console.log(i);
	}, 500);
}
console.log('For loop complete:', i);*/

var iPrint = function(i){
	setTimeout(function(){
		console.log('iPrint:', i);
	}, 500);
};

for(var i = 0; i < 5; i++){
	iPrint(i);
}
console.log('For loop complete:', i);