var songs = [
	{ artist: 'Enya', title: 'Wild Child', length: '03:47' },
	{ artist: 'Enya', title: 'Something', length: '03:47' },
	{ artist: 'Enya', title: 'Something Else', length: '02:48' },
	{ artist: 'Enya', title: 'Another Thing', length: '06:10' },
	{ artist: 'Tycho', title: 'A Walk', length: '05:16' },
	{ artist: 'Tycho', title: 'Hours', length: '05:44' },
	{ artist: 'Single Cell Orchestra', title: 'Transmit Liberation', length: '04:25' },
	{ artist: 'Andy McKee', title: 'Drifting', length: '07:24' }
];

var render = function(playlist) {
	$('#playlist').empty().append(
		createPlaylist(playlist)
	);
};

var createPlaylist = function(playlist) {

	// create a div to contain all the songs
	var playlistContainer = $('<div class="playlist-container">');

	// render the songs inside the container
	playlistContainer.append(playlist.map(createSong));

	// return the newly created container element
	return playlistContainer;
};

var createSong = function(song) {
	var songEl = $('<div class="song">');
	var artistEl = $('<h2 class="artist">').text(song.artist);
	var titleEl = $('<p class="title">').text(song.title)
	var lengthEl = $('<span class="length">').text(song.length)

	songEl.append(artistEl, titleEl, lengthEl);

	return songEl;
};
