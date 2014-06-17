$(document).on('ready', function(){

	// create our template blueprint...
	var html = $('#tweet-template').html();
	var tweetTemplate = Handlebars.compile(html);

	/*
	// test render...
	console.log(
		tweetTemplate({
			user: {name: 'Test'},
			text: 'test text'
		})
	);
	*/

	// listen for submit event on our form
	$('#search-form').on('submit', function(e){
		// prevent form from submitting to browser
		e.preventDefault();

		// grab the term(s)
		var term = $('#search-field').val();

		// make a get request to search endpoint using AJAX
		// the second parameter is the data to be sent to the
		// server with the request. In this case, it will contain
		// the searched term.
		$.get('/twitter/search', {term: term}, function(tweets){
			// because we are doing a new ajax search, we want to clear
			// any existing tweets so we only see the unique results
			$('#results').empty();
			
			// when the server is done, we'll have access to
			// whatever was sent or rendered via the "tweets" parameter
			// console.log('From API:', tweets)
			for(var i = 0; i < tweets.length; i++){
				// compile a new instance of the tweetTemplate blueprint,
				// using the currently looped tweet as the context
				var templateOutput = tweetTemplate(tweets[i]);

				// append new tweet html to our tweets listing
				$('#results').append(templateOutput);
			}
		});
	});

});




