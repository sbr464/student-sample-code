var AvailableIngredients = Backbone.Collection.extend({
	model: Ingredient,
	url: '/ingredients'
})