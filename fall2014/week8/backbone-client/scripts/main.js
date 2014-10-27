// Create a collection of candy items. This
// will use our CandyBag collection and initialize
// it with a preset list of candy items
var candyBag = new CandyBag([
	new Candy({name: 'KitKat', calories: 5000}),
	new Candy({name: 'Nerds', calories: 1, isPoisoned: true}),
	new Candy({name: 'Twix', calories: 10})
]);

// Generate a view for the candy bag.
// This will have our candyBag collection
// attached to it. We can also specify arbitrary
// attributes that can be used inside the view
// that may not come from the collection itself
var bagView = new BagView({
	collection: candyBag,
	attributes: {
		title: 'My Candy Bag'
	}
});
// Call the render method to have this bag
// render its collection contents as well
bagView.render();

// Add a second view for the same collection.
// Since it uses the same collection as above,
// any changes to the collection will affect
// both bagView AND bagView2. Would be helpful to
// break this into two separate collections so
// they can act independently.
var bagView2 = new BagView({
	collection: candyBag,
	attributes: {
		title: 'Someone Else\'s Candy Bag'
	}
});
bagView2.render();


// Once the DOM is entirely ready,
// we'll append our views and
// off we go!
$(document).on('ready', function() {

	// When the document is all ready,
	// append our views
  $('.container').append(
  	bagView.el,
  	bagView2.el
  );
});