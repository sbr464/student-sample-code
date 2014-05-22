var RecipeBox = Backbone.Collection.extend({
	model: Recipe,
	url: '/recipes',
	toArray: function() {
	  return this.map(function(recipe) {
	    return recipe.toArray();
	  })
	}
})