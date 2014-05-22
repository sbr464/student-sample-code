var RecipeBoxView = Backbone.View.extend({

	events: {
		'click .recipe' : 'clickRecipe'
	},

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "change", this.render);
		this.renderTemplate = Handlebars.compile($('#recipe-box-template').html());
	},

	clickRecipe: function(e) {
	  var recipeEl = $(e.currentTarget);
		var id = recipeEl.attr('data-id');
		this.trigger('select', this.collection.findWhere({ _id: id }))
	},

	render: function() {
	  this.$el.empty().append(this.renderTemplate(this.collection.toArray()));
	}

})