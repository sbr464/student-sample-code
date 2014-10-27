// This view represents our collection of
// candy. It is the main entry point and will
// handle rendering each candy item itself
var BagView = Backbone.View.extend({

	// Set the template helper to our bag-tpl
	template: Handlebars.compile($('#bag-tpl').html()),

	// This will be called like a constructor on
	// this view and will allow us to run some logic
	// right when a view is created
	initialize: function(){
		// Use setElement when the view is created
		// to pre-build the main html content. Since we
		// won't be re-rendering this part of the template
		// it's ok to do this here.
		this.setElement(this.template(this.attributes));

		// This will add an internal event handler to this view.
		// It will listen for 'all' events on this.collection, and,
		// when it detects an event on the collection, it will
		// automatically call the "this.render" method, which
		// just re-renders our list of models.
		this.listenTo(this.collection, 'all', this.render);
	},

	// This is an object of events that is automatically delegated
	// and handled by Backbone. The format is:
	// 	'eventName selector': 'eventToFire'
	// such as:
	// 	'click .action.my-button': 'showDetails'
	events: {
		'submit form': 'addCandy'
	},

	// When an event is attached through the events object
	// we need to set up the events that will be fired via
	// the values we set (such as addCandy above)
	addCandy: function(e){
		// This is on submit, so prevent the form from
		// actually submitting...
		e.preventDefault();

		// Get the name value out of the form
		var name = this.$('[name=name]').val();

		// Create a new Candy using the form data
		var newCandy = new Candy({
			name: name
		});

		// By calling "add" and passing our new candy item
		// to the collection, it will automatically fire an
		// event which, in this case, will be caught by our
		// listenTo attachment in our initialize method above.
		this.collection.add(newCandy);

		// Empty the form input
		this.$('[name=name]').val('');
	},

	// This will be called to essentially "re-draw" this
	// element based on content changes. If the collection
	// is modified in any way, render will be automatically
	// called because of our listenTo in initialize
	render: function(){
		// Since we really only care about what's changed,
		// and, in this case that happens to only be our collection,
		// that's the only part of this view that needs to get built.
		// We need to create a new view for each model inside the
		// collection, render it, and then append the views to our UL
		var candyItems = this.collection.map(function(candyItem){

			// Using MAP means that we can iterate easily
			// over each model in the collection and transform
			// them into a new array containing each built DOM element
			var candyView = new CandyView({
				model: candyItem
			});

			candyView.render();
			// Using map, we return the element we want added to the output
			return candyView.el;

		});

		// append the rendered collection of HTML dom elements
		// look for any UL's inside of this specific view,
		// clear it out, and then append our array of elements
		this.$('ul').empty().append(candyItems);

	}
});