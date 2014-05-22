var IngredientsChooser = Backbone.View.extend({

	events: {
		'click .ingredient' : 'choose'
	},

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "change", this.render);
		this.renderTemplate = Handlebars.compile($('#ingredients-chooser-template').html());
	},

	render: function() {
	  this.$el.empty().append(this.renderTemplate(this.collection.toJSON()));
	},

	choose: function(e) {
		var ingredientEl = $(e.currentTarget);
		var id = ingredientEl.attr('data-id');
		var ingredient = this.collection.where({ _id: id })[0];
	  this.trigger('choose', ingredient);
	}

})