/*
Name			Email
===================================
Bob				bob@refactoru.com
Dan				dan@refactoru.com
Eliza			eliza@refactoru.com
*/

// attempt 1
var students = [
	"bob", "dan", "eliza"
];

// attempt 2
// parallel arrays
var students = {
	name: ["bob", "dan", "eliza"],
	email: ["bob@refactoru.com", "dan@refactoru.com", "eliza@refactoru.com"]
};

// attempt 3
// legitimate data structure: fast lookups of values
var students = {
	bob: "bob@refactoru.com",
	...
};

// attempt 4 (last one, I promise...)
// standard representation of a list of objects (spreadsheet, database)
var students = [
	{ name: 'bob', email: 'bob@refactoru.com' },
	{ name: 'dan', email: 'dan@refactoru.com' },
	{ name: 'eliza', email: 'eliza@refactoru.com', homeAddress: {
		address1: '123 Hallafax',
		address2: '',
		city: 'Denver'
	} }
];

students[2].homeAddress.city

// students[0].name
var bob = students[0];
console.log(bob.name);
console.log(bob.email);

var money = 100;

var amy = {
	name: 'amy',
	email: 'amy@refactoru.com',
	savingsAccount: money,
	sayHi: function(phrase) {
		console.log(phrase);
	}
}

amy.sayHi('bye');
