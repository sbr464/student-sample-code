// string interpolation
$(function() {

	var person = {
		firstName: 'Ron',
		lastName: 'Bergundy',
		age: 45,
		likes: ['scotch', 'scotch', 'scotch']
	}

	// string concatenation
	$('#description').text('I\'m ' + person.firstName + ' ' + person.lastName + '. I\'m ' + person.age + ' years old. I like ' + person.likes.join(', ') + '.');

	// supplanting an array
	$('#description').text('I\'m {3} {1}, {2}. I like {3}.'.supplant(
		[person.firstName, person.lastName, person.age, person.likes.join(', ')]
	));

	// supplanting an object
	// *only works for string or number values
	$('#description').text('I\'m {firstName} {lastName}, {age}.).'.supplant(person));

	$('.container').append('<label>First Name: <input type="text" value="{firstName}"></label><label>Last Name: <input type="text" value="{lastName}"></label>'.supplant(person))

});
