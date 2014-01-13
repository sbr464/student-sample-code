// EXAMPLE 1
//*
for(var i=0; i<10; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000)
}
//*/

/*
for(var i=0; i<10; i++) {
	setTimeout(makePrinter(i), 1000)
}

function makePrinter(x) {
	return function() {
		console.log(x);
	}
}
//*/

/*
for(var i=0; i<10; i++) {
	(function(x) {
		setTimeout(function() {
			console.log(x);
		}, 1000)
	})(i);
}
//*/


// EXAMPLE 2

/*
var artists = ['Caspian', 'Son Lux', 'Tycho', 'Washed Out'];

// Creates a DOM element that represents an event retrieved from the BandsInTown API.
function createEventLink(name, event) {
	return $('<div class="event">{0}: <a href="{1}" target="_blank">{2}</a></div>'.supplant([name, event.ticket_url, event.title]));
}

for(var i=0; i<artists.length; i++) {
	$.getJSON('http://api.bandsintown.com/artists/{0}/events.json?api_version=2.0&app_id=YOUR_APP_ID&callback=?'.supplant([artists[i]]), function(events) {
		$('body').append(createEventLink(artists[i], events[0]));
	})
}
//*/