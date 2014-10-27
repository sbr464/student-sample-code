// Define a backbone view to represent our
// individual candy items.
var CandyView = Backbone.View.extend({

	// Specify what template this view will be using
	// by getting its html content from the html
	// and running it through the Handlebars compiler
	template: Handlebars.compile($('#candy-tpl').html()),

	// This is a placeholder method to have a conventional
	// way of rendering our content
	render: function(){
		// Set the view's element to be the result of 
		// running the pre-compiled template function
		// using the JS Object representation of this model
		this.setElement(this.template(this.model.toJSON()));
	}
});
