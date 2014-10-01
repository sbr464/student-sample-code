
//////////////////
// PERSON CLASS //
//////////////////

/**
 * A person that is run in the simulation
 * @param {string} name Name of the person
 */
var Person = function(name){
	this.name = name;
};

/**
 * Render a DOM element that represents
 * this person instance
 * @return {jQuery} jQuery DOM element
 */
Person.prototype.render = function() {
	// If the element property already exists, just return it!
	if(this.element) return this.element;

	// If the element property does NOT exist,
	// Generate a new DOM element and store it
	// inside the instances "element" property
	this.element = $('<h4>' + this.name + '</h4>');

	// Attach an event handler to the element that was created:
	// 	Take advantage of scope inheritance:
	/*var person = this;
	this.element.on('click', function(){
		console.log('Click:', this, person.name);
	});*/
	// This one will break context AND have no scope...
	// 	By using "bind", we force a context on the
	// 	execution of this method, which will forcefully
	// 	override jQuery trying to set "this" on its own.
	var person = this;
	this.element.on('click', this.personClick.bind(person));

	// Either way, we still need to return the DOM element
	return this.element;
};

/**
 * Handle click events firing on this persons element
 */
Person.prototype.personClick = function() {
	console.log('Click:', this);

	// This is now the instance of the Person
	// class because of the "bind" we used above
	
	this.element.css('color', 'red');

};


////////////////////
// BUILDING CLASS //
////////////////////


/**
 * Building that instances of Person
 * can move to and from.
 * @param {string} name Name of the building
 */
var Building = function(name){
	// Name of the building
	this.name = name;

	// An array to hold on to references
	// of all people in this building
	this.people = [];
};

/**
 * Transfer a person from one building to another
 * @param  {string}   name     Name of person to transfer
 * @param  {Building} building Building to transfer to
 */
Building.prototype.transferPerson = function(name, building) {
	var foundPeople;
	// Look through each person in this building
	for (var i = 0; i < this.people.length; i++) {
		// If their name is equivalent to the name argument
		if(this.people[i].name === name){
			// Remove the person from the building
			foundPeople = this.people.splice(i, 1);

			// Break allows us to halt execution of the loop
			// at that moment in time.
			// In this case we don't want to keep checking the
			// array of people once we've found a match,
			// so we can safely "break" the loop to continue
			// executing the function.
			break;
		}
	}

	// If we found a person...
	if(foundPeople){
		// foundPeople will be an array of all
		// people who have been removed
		// from this building, so just pull
		// the only person from that array knowing
		// that it will only be a length of 1.
		var actualPerson = foundPeople[0];
		building.people.push(actualPerson);
	}
};





/////////////
// TESTING //
/////////////

// Create some people
var noah = new Person('Noah');
var laura = new Person('Laura');
var brett = new Person('Brett');
var jemaine = new Person('Jemaine');

// Create some buildings
var home = new Building('Home');
var work = new Building('Work');
var bar = new Building('Bar');

// Put the people in the buildings
home.people.push(noah);
work.people.push(laura);
bar.people.push(brett);
bar.people.push(jemaine);

// Transfer a person:
// 		This will move the laura instance from
// 		the work instance to the bar instance.
work.transferPerson('Laura', bar);

// Pre-render people
$('body').append(noah.render());
$('body').append(brett.render());