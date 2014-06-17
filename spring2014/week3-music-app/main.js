$(document).on('ready', function() {

	// RENDERING FUNCTIONS
	// (defined in playlist.js)

	// EVENT HANDLERS
	$(document).on('click', '.sort-button', function() {

		// copy the playlist
		var playlist = songs.slice(0);

		// get which button was clicked on
		var property = $(this).text().toLowerCase();

		// sort the playlist
		playlist.sort(function(song1,song2) {
			var a1 = song1[property].toLowerCase();
			var a2 = song2[property].toLowerCase();
			return a1 > a2 ? 1 :
						 a1 < a2 ? -1 :
						 0;
		});

		render(playlist);

		return false; // e.preventDefault()
	});

	// MAIN
	render(songs);
  
});