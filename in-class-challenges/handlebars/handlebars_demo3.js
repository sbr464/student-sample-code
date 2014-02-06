$(function(){

	var source = $('#world').html();
	var data = {
		header: 'Hello World',
		content: 'More information about the world. Because it\'s great!',
		shouldPrintMessage: true,
		coolLocations: [
			'ATL', 'Hawaii', 'Kyoto'
		],
		cities: {
			Montana: 'Helena',
			Texas: 'Austin',
			Vermont: 'Montpelier'
		}
	};

	var worldTemplate = Handlebars.compile(source);

	$('body').prepend( worldTemplate(data) );


});