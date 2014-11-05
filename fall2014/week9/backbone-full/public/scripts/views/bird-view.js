// View for individual birds
var BirdView = Backbone.View.extend({
	// Pull a template from the HTML (partials) and pass through handlebars
	template: Handlebars.compile( $('#bird-tpl').html() ),

	// Whenever we want to render this view...
	render: function(){
		// Set the el and $el properties of this
		// view...
		this.setElement(
			// Use the pre-compiled template function
			this.template(
				// Using the model data as the context
				this.model.toJSON()
			)
		);
	},

	// Individual bird events
	events: {
		'click .delete': 'deleteBird'
	},

	// Our internal deleteBird method, called from our event map
	deleteBird: function(){
		// This will remove the model from the collection
		// AND make a DELETE request to the server
		this.model.destroy();
	}
});