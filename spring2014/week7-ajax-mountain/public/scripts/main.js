/*********************************
 * CLASS DEFINITIONS
 *********************************/

// A hiking trail.
var Trail = function(name, difficulty) {
	this.name = name;
	this.difficulty = difficulty;
};

// A person that likes to climb up mountains.
var Hiker = function(name, skill) {
	this.name = name;
	this.skill = skill;
};

/** Determines if the hiker's skill is >= the difficulty of the trail. */
Hiker.prototype.canClimb = function(trail) {
	return this.skill >= trail.difficulty;
};

// A tall place with trails.
var Mountain = function(name, elevation) {
	this.name = name;
	this.elevation = elevation;
	this.trails = [];
};

/** Adds a trail to the Mountain */
Mountain.prototype.addTrail = function(trail) {
	this.trails.push(trail);
};

/** Return a list of trails on the mountain that a given hiker can climb. */
Mountain.prototype.climbableTrails = function(hiker) {
	var trailList = this.trails.filter(function(trail) {
		return hiker.canClimb(trail);
	});
	return trailList;
};

// elegant implementation with bind
// Mountain.prototype.climbableTrails = function(hiker) {
// 	return this.trails.filter(hiker.canClimb.bind(hiker));
// };


/*********************************
 * FUNCTION DEFINITIONS
 *********************************/

var renderMountains = function(mountains) {

	// before rendering mountains, clear the existing mountains the DOM
	$('#mountains .mountain').remove();
	// or this: $('#mountains').empty();

	// 1. loop through mountains
	for(var i=0; i<mountains.length; i++) {
		// 2.   create a DOM element for that mountain
		var el = createMountain(mountains[i]);
		// 3.   add DOM element to the mountains container
		$('#mountains').append(el);
	}
};

/** Given an instance of a Mountain, return a DOM element that represents it. */
var createMountain = function(mountain) {
	var el = $('<div class="mountain">');
	el.text(mountain.name + ' (' + mountain.elevation + ')');
	return el;
};

/*********************************
 * MAIN
 *********************************/

$(document).on('ready', function() {

	// load the mountains after the page loads by sending a separate HTTP request
	// $.get('/mountains', function(mountains) {
	// 	renderMountains(mountains);
	// });

	renderMountains(mountains);

	// sets up the submit event
	$('#mountain-form').on('submit', function() {

		// cache selectors
		var nameInput = $('#mountain-form [name="name"]');
		var elevationInput = $('#mountain-form [name="elevation"]');

		// 1. retrieve values from mountain form
		var name = nameInput.val();
		var elevation = +elevationInput.val();

		$.post('/mountain', { 
			name: name, 
			elevation: elevation 
		}, function(mountains) {

			// announce that the mountain was created
			nameInput.val('');
			elevationInput.val('');
			$('#announcement').text('Mountain created').delay(3000).slideUp();

			// render the mountains from the server
			renderMountains(mountains);

		});

		// // 2. create a new instance of a Mountain
		// var mountain = new Mountain(name, elevation);

		// // 3. add the mountain to the data
		// mountains.push(mountain);

		// // resort the mountains
		// mountains.sort(function(m1,m2) {
		// 	var name1 = m1.name.toLowerCase();
		// 	var name2 = m2.name.toLowerCase();
		// 	return name1 > name2 ? 1 :
		// 				 name1 < name2 ? -1 :
		// 				 0;
		// });


		return false;
	})

});
