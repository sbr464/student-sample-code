var RecipeBlendedModal = Backbone.View.extend({

	events: {
		'click .save' : 'save'
	},

	initialize: function() {
		this.renderTemplate = Handlebars.compile($('#recipe-blended-modal').html());
	},

	render: function() {
	  return this.$el.empty().append(this.renderTemplate(this.model.toJSON()));
	},

	// just render it at the end of the body and show it
	show: function() {

		// render and append it to the body
	  $('body').append(this.render());

	  // show the modal
	  this.$('.modal').modal();
	},

	save: function() {
	  this.$('.modal').modal('hide');
	  this.trigger('save', this.model);
	}

})