// This is client-side JS

/**
 * Render the given track data as a list item
 * @param  {object} trackData Given track data
 * @return {jQuery}           DOM Element
 */
var renderTrack = function(trackData){

	// Generate a new List Item via jQuery
	var el = $('<li>');

	// Append elements to the LI that will help
	// display the basics of a track
	el.append('<h4>' + trackData.title + '</h4>');
	el.append('<p><em>' + trackData.artist + '</em></p>');

	// Give the new element back to the caller
	return el;
};

$(function(){

	// On Page Load:
	// 		Pull down the list of music
	// 		using AJAX and render it
	// 		to the page.
	$.get('/api/getMusic', {}, function(responseData){
		// We've got a dataset back from the server,
		// so let's build out the display in the DOM
		console.log('getMusic Response:', responseData);

		// Loop through the responseData array...
		for (var i = 0; i < responseData.length; i++) {

			// And render each track to the DOM
			var trackEl = renderTrack(responseData[i]);
			$('#music-list').append(trackEl);
		};
	});

	// Hijack the new-music form
	$('#new-music').on('submit', function(e){
		// Don't let the browser submit the form;
		// we want to handle it internally
		e.preventDefault();

		// Pull out the values from the form fields manually
		var trackTitle  = $(this).find('[name=title]').val();
		var trackArtist = $(this).find('[name=artist]').val();
		
		// Build an object out of that data
		var trackData = {
			title: trackTitle,
			artist: trackArtist
		};

		// Print the trackData object to browser
		// console for debugging purposes
		console.log(trackData);

		// Make a POST request to the server and send
		// it the trackData object
		$.post('/api/addMusic', trackData, function(responseData){
			// When the server is done saving the track,
			// it'll send us back the track information
			// that it saved into the database, so
			// we just need to append it to the view
			var trackEl = renderTrack(responseData);
			$('#music-list').append(trackEl);
		});

	});

});