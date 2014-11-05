// View for the entire flock. Will contain controls
// for rendering and adding new birds to the flock.
var FlockView = Backbone.View.extend({
	// Pull the template in and compile it
	template: Handlebars.compile( $('#flock-tpl').html() ),

	// Backbone will automatically call this whenever
	// a new instance of this view is created
	initialize: function(){
		// Since our template has some stuff that
		// doesn't necessarily need to change per-update,
		// we'll pre-render it here
		this.setElement(
			this.template(
				this.attributes
			)
		);

		// When the collection changes, re-render only the UL content
		this.listenTo(this.collection, 'all', this.render);
	},

	// Called to re-render the view
	render: function(){
		// We want to have a unique view for each bird
		// in our collection, so let's take advantage
		// of map to minimize the impact
		var birdViews = this.collection.map(function(bird){
			// For each bird in the collection, create a
			// new view for it
			var birdView = new BirdView({model: bird});
			// Render that view so that the element is generated
			birdView.render();
			// And return the rendered element to the map
			return birdView.el;
		});

		// Find the local birds UL, empty it, and
		// append all our newly created bird views
		this.$('.birds').empty().append(birdViews);
	},

	// Event map for this view. These events are automatically delegated
	events: {
		// Similar to:
		// 		$(document).on('submit', '.new-bird', this.newBird);
		'submit .new-bird': 'newBird'
	},

	// This function will be called whenever our .new-bird
	// form is submitted. Could also be called from other
	// functions too.
	newBird: function(e){
		// Prevent the form from submitting
		e.preventDefault();

		// Get the values from the form
		var name = this.$('[name=name]').val();
		var image = this.$('[name=image]').val();

		// On the current collection, "create" a
		// new bird. This will not only add the bird
		// locally to the collection, but also automatically
		// run an ajax call up to the server to persist the data.
		this.collection.create({
			name: name,
			image: image
		});
	}
});