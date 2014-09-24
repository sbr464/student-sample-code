// NOTE: Make sure you include the underscore library in your html file!

// reduce method: given an array, reduce it down to a single value
var originalList = [1, 2, 3];
var numericalAdd = function(memo, num){
	return memo + num;
};
var startValue = 0;
var reducedNumbers = _.reduce(originalList, numericalAdd, startValue);
console.log('Reduce (numbers):', reducedNumbers);

// challenge: Acronym Builder - Given the string "I'm so meta even this acronym"
//															give back the string "I.S.M.E.T.A."
var originalString = "I'm so meta even this acronym";
var acronymReducer = function(memo, currentWord){
	return memo + currentWord[0].toUpperCase() + '.';
};
var acronymStart = '';
var acronym = _.reduce(originalString.split(' '), acronymReducer, acronymStart);
console.log('Reduce (acronym):', acronym);


// find: given an array, find a item that matches the search function.
// 				Find will stop searching after the first result returns true,
// 				while filter will finish searching and return ALL results that
// 				return true.
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log('Find (even):', even);

// challenge: given an array, find the first person who's id matches 3:
// 						[
// 							{id: 1, name: 'Chris'},
// 							{id: 5, name: 'Joe'},
// 							{id: 3, name: 'Raine'},
// 							{id: 4, name: 'Sean'}
// 						]

var users = [
	{id: 1, name: 'Chris'},
	{id: 5, name: 'Joe'},
	{id: 3, name: 'Raine'},
	{id: 4, name: 'Sean'}
];
var friendId = 3;
var user = _.find(users, function(user){
	return user.id === friendId;
});
console.log('Find (friend):', user);


// pluck: given an array of objects, return an array of a specific property
// 				"plucked" from each object
var stooges = [
	{name: 'moe', age: 40},
	{name: 'larry', age: 50},
	{name: 'curly', age: 60}
];
var names = _.pluck(stooges, 'name');
console.log('Pluck (names):', names);


// Given an array of photos, get back a unique list of all tags from all photos:
var photos = [
	{
		id: 12345,
		tags: ['cat', 'happy', 'evil', 'scratch'],
		title: 'A cat with a plan'
	},
	{
		id: 23456,
		tags: ['cat', 'angry', 'nofood', 'alone'],
		title: 'I don\'t know whos cat this is'
	},
	{
		id: 34567,
		tags: ['cat', 'happy', 'love', 'snuggle'],
		title: 'This cat eats well'
	}
];

// Using the underscore "chain" method allows us to string along the
// original array as it is transformed by multiple methods. Saves some
// typing so we don't have to pass the array to each function ourselves.
// We more than likely need to use the "value" method to retrieve the
// values from the underscore internals. If we had used a method that
// actually returns a single value (like reduce or max), we wouldn't need
// value.
// 
// We start our chain using the "photos" array. From that array, we
// need to pull out each array of tags. At this point, our chained set
// of values is an array of arrays of tags. From that point, we want to
// collapse all the arrays down into a single level array, so we use the
// "flatten" method. At this point, our values are a single-level array
// of all tags. Since we want only the unique tags from the set, we chain
// on a call to "uniq" which will remove all duplicates from the current set
// of values. Finally, calling "value" will give us back the array of values
// that underscore has been chaining along.
var tags = _.chain(photos).pluck('tags').flatten().uniq().value();
console.log('Photo Tags:', tags);