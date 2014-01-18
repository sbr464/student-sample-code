// literal: entering a value directly (i.e. not from a variable or expression, etc)
24 			// number literal
false 		// boolean literal
"test" 		// string literal
{ a: 10 } 	// object literal

// object characteristics
// - objects are unordered
// - keys are unique

// 1. defining an object literal
// 2. declaring a new local variable called movieReview
// 3. assigning the object literal to movieReview
var movieReview = {
    title:    "Spirited Away",
    director: "Hayao Miyazaki",
    rating:   4.5
};

movieReview.title
console.log
myname.length

// deleting a property
delete movieReview.rating;

// adding a property (same as setting a property)
movieReview.author = 'Roger Ebert';

// in operator
if('title' in movieReview) {
	// ...
}

console.log(movieReview.noSuchThing); // undefined

// looping through an object
for(var key in movieReview) {
	console.log(movieReview[key]);
}








