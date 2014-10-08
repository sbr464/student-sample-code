// Original class without polymorphism
/*var Song = function(name, artist){
	this.name = name;
	this.artist = artist;
};*/

// Use polymorphism to support creating a
// new song from a given object literal
var Song = function(name, artist){
	if(typeof name === 'string') {
		this.name = name;
		this.artist = artist;
	} else {
		// assume it's an object (meaning
		// that "name" has been sent an
		// object literal instead of a string)
		for(var prop in name){
			console.log('Copying:', prop, name[prop]);
			this[prop] = name[prop];
		}
	}

	console.log('This inside Song()', this);
};

// Print method that's only available on instances of Song
Song.prototype.print = function() {
	console.log('Song:', this.name, this.artist);
};

// Precreate some tracks as new Song
var tracks = [
	new Song('Friday', 'Rebecca Black'),
	new Song('5 Step', 'Radiohead')
];

// Save it automatically into local storage
localStorage.setItem('tracks', JSON.stringify(tracks));

// just pull it back out immediately
var pulledTracks = JSON.parse(localStorage.getItem('tracks'));
console.log('pulledTracks', pulledTracks);

// Since putting something into local storage resets it back
// to an object literal, let's map over each of the pulled tracks
// and return a new array of them converted (via the polymorphism)
// into instances of Songs.
var convertedPulledTracks = pulledTracks.map(function(literalTrack){
	return new Song(literalTrack);
});
console.log('convertedPulledTracks', convertedPulledTracks);