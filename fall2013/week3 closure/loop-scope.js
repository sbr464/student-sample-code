var names = ['Raine', 'Matt', 'Chris'];
var talkFunctions = [];

/* Not Working */
for(var i=0; i<names.length; i++) {
	var talk = function() {
		console.log("Hi, I'm " + names[i]);
	};
	talkFunctions.push(talk);
}

for(var j=0; j<talkFunctions.length; j++) {
	talkFunctions[j]();
}


/* Working */
var talkGenerator = function(x) {
	return function() {
		console.log("Hi, I'm " + names[x]);
	};
};

for(var i=0; i<names.length; i++) {
	var talk = talkGenerator(i);
	talkFunctions.push(talk);
}

for(var j=0; j<talkFunctions.length; j++) {
	talkFunctions[j]();
}