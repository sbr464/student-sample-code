$(function(){
	var data = {
		books: [
			'Book1', 'Enders Game', 'Book3', 'Book4'
		]
	};

	var data2 = {
		books: [
			'Book -1', 'Book10', 'Goblet of Fire'
		]
	};

	var bookSource = $('#books .books').html();
	var bookTemplate = Handlebars.compile(bookSource);

	$('body').prepend( bookTemplate(data) );
	$('body').prepend( bookTemplate(data2) );

});