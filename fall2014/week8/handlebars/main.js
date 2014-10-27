$(document).on('ready', function() {
  
	// Get the HTML content of our template
	var templateSource = $('#demo-template').html();
	console.log(templateSource);

	// Have handlebars compile this source into
	// a reusable template function
	var templateFunction = Handlebars.compile(templateSource);
	console.log(templateFunction);

	// Define a context to be used in the
	// generation step below
	var data = {
		name: 'Chris Rolfs',
		jsLibrary: 'Handlebars',
		game: 'HalfLife 3?',
		opacity: true,
		snacks: ['granola bar', 'muffin', 'quinoa', 'gooey ganja balls']
	};

	// Use the template to generate new HTML content
	var outputHTML = templateFunction(data);
	console.log(outputHTML);

	// Append the output to the page
	$('#people').append(outputHTML);


	// Reuse the templateFunction to render another person
	var data2 = {
		name: 'John Jacob Jingleheimer-Schmidt',
		jsLibrary: 'Phaser.js',
		game: 'bioshock',
		schedule: {
			morning: 'Do nothing',
			evening: 'Continue doing nothing'
		}
	};
	var johnOutput = templateFunction(data2);
	$('#people').append(johnOutput);





	/*
		
		You are planning a super cool halloween party.
		Several of your friends are coming and you want
		to tell them what to bring.

		Chris:
			- spoon
			- his sexy self
			- a hat
		Max:
			- Groundhogs
			- Nude accapella
			- Jelly

	 */
	
	var partyPeople = [
		{
			name: 'Chris',
			supplies: [
				'spoon', 'his sexy self', 'a hat'
			]
		},
		{
			name: 'Max',
			supplies: [
				'Groundhogs', 'Nude accapella', 'Jelly'
			]
		}
	];

	var personSource = $('#party-person').html();
	var personTemplateFunction = Handlebars.compile(personSource);
	var peopleHTML = partyPeople.map(function(person){
		return personTemplateFunction(person);
	});

	console.log(peopleHTML);
	$('#party').append(peopleHTML);


});