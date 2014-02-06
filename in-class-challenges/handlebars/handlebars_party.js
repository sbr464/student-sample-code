$(function(){

	var partyData = {
		partyName: 'Super Fun Party Time',
		people: {
			John: ['cake', 'chips', 'dip', 'shoes'],
			Jacob: ['beer', 'liquor', 'wine'],
			Jingle: ['cheer', 'Heimer', 'Schmidt'],
			Heimer: ['carrot sticks', 'celery sticks']
		}
	};

	var partySource = $('#party').html();
	var partyTemplate = Handlebars.compile(partySource);

	$('body').prepend( partyTemplate(partyData) );

});