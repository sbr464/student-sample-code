var RecipeBox = Backbone.Collection.extend({
	model: Recipe,
	url: '/recipes'
})