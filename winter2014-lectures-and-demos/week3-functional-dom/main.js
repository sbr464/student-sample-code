var concerts = [
	{
		artist: 'Coco Rosie',
		city: 'Denver',
		date: new Date('2/1/2014')
	},
	{
		artist: 'Ben Folds',
		city: 'Chicago',
		date: new Date('10/20/2004')
	},
	{
		artist: '2Chainz',
		city: 'Denver',
		date: new Date('2/15/2014')
	}
];

$(function() {

	/** Given a concert object, returns a new DOM element representating that concert. */
	var createConcert = function(concert) {
		var concertEl = $('<div class="concert">');
		var artistEl = $('<div class="artist">').text(concert.artist);
		var cityEl = $('<div class="city">').text(concert.city);
		var dateEl = $('<div class="date">').text(concert.date.toDateString());

		// without chaining:
		// concertEl
		// 	.append(artistEl);
		// concertEl
		// 	.append(cityEl);
		// concertEl
		// 	.append(dateEl);

		// chaining
		// concertEl
		// 	.append(artistEl)
		// 	.append(cityEl)
		// 	.append(dateEl);

		concertEl.append([artistEl, cityEl, dateEl]);

		return concertEl;
	};

	// var benFoldsConcert = createConcert(concerts[1]);
	// $('#past').append(benFoldsConcert);

	// var cocoRosieConcert = createConcert(concerts[0]);
	// $('#upcoming').append(cocoRosieConcert);

	// var twoChainzConcert = createConcert(concerts[2]);
	// $('#upcoming').append(twoChainzConcert);

	var pastConcerts = filter(concerts, function(item) {
		var today = new Date();
		return item.date < today;
	});

	var upcomingConcerts = filter(concerts, function(item) {
		var today = new Date();
		return item.date > today;
	});

	// redundant function wrapper
	// var pastConcertElements = map(pastConcerts, function(item) {
	// 	return createConcert(item);
	// });

	// identical:
	var pastConcertElements = map(pastConcerts, createConcert);
	var upcomingConcertElements = map(upcomingConcerts, createConcert);

	$('#upcoming').append(upcomingConcertElements);
	$('#past').append(pastConcertElements);




		// attempt 1
		// if(item.date < today) {
		// 	return true;
		// }
		// else {
		// 	return false;
		// }

		// attempt 2
		// return item.date < today ? true : false;

});
