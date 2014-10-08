// Global Variables:
var songList;

// Global Functions
var renderSongs = function(){
	// Clear the song list in case
	// we already rendered some there
	$('#song-list').empty();

	// Append all the songs into the song list UL
	for (var i = 0; i < songList.length; i++) {
		$('#song-list').append('<li>' + songList[i] + '</li>');
	};
};

var saveSongs = function(){
	var songListJson = JSON.stringify( songList );
	localStorage.setItem('songList', songListJson);
};

// jQuery on ready:
$(function(){

	$('#new-song').on('submit', function(e){
		e.preventDefault();

		var songName = $(this).find('#song-name').val();
		songList.push(songName);

		// Render the visuals onto the page
		renderSongs();

		// Update localStorage to match the new data
		saveSongs();
	});


	// Initialize the app:
	
	// Use the locally stored version of the
	// songlist if it has a value...
	songList = JSON.parse(localStorage.getItem('songList')) || [];

	// Regardless of whether songs have been loaded,
	// let's try to render all of them anyways.
	renderSongs();

});