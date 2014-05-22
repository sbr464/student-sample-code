var RecipeBoxView = Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.collection, "change", this.render);
		this.renderTemplate = Handlebars.compile($('#recipe-box-template').html());
	},

	render: function() {
	  this.$el.empty().append(this.renderTemplate(this.collection.toJSON()));
	}

})