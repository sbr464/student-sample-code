var Recipe = Backbone.Model.extend({

	defaults: function() {
		return {
			name: '',

			// array of {
			//	 quantity: Number,
			//	 ingredient: Ingredient
			// }
			ingredients: []
		}
	},

	smoothieNames: [
		'Explosion', 'Sunrise', 'Extravaganza', 'Activator', 'Charger', 'Twist', 'Blast', 'Paradise', 'Heaven', 'Glory'
	],

	// adds a new ingredient or ups the count if it exists
	// fires the change event
	add: function(ingredient) {

		// if it's already in the smoothie, ignore it
		if(!_.contains(this.get('ingredients'), ingredient)) {
			this.get('ingredients').push(ingredient);
			this.trigger('change', ingredient);
		}
	},

	// finds an ingredient entry with the given indgredient id
	getIngredientById: function(ingredientId) {
		return _.findWhere(this.get('ingredients'), { _id: ingredientId });
	},

	removeById: function(id) {
		this.set('ingredients', _.filter(this.get('ingredients')), function(ingredient) {
		  return ingredient._id !== id;
		});
		this.trigger('change', ingredient);
	},

	// generate a name for this unique recipe
	makeName: function() {

		var ingredients = this.get('ingredients');

		// if they just blended one ingredient, give them soup!
		if(ingredients.length === 1) {
			return ingredients[0].get('name') + ' Soup';
		}
		else {
			// get the first two ingredients to use in the name (e.g. Strawberry-Peach)
			var namePrefix = _.chain(ingredients)
				.shuffle()
				.first(2)
				.map(function(ingredient) {
				  return ingredient.get('name');
				})
				.value()
				.join('-');

			return namePrefix + ' ' + _.sample(this.smoothieNames);
		}

	},

	setName: function() {
		this.set('name', this.makeName());
	},

	// serialize recipe to send to server
	toJSON: function() {
		return {
			name: this.get('name'),
			ingredients: this.get('ingredients').map(function(item) {
				return item.get('_id');
			})
		}
	},

	toArray: function() {
		return {
			name: this.get('name'),
			ingredients: this.get('ingredients').map(function(item) {
				return item.attributes;
			})
		}
	},

})