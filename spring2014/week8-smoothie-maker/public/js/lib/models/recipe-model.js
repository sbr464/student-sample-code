var Recipe = Backbone.Model.extend({

	idAttribute: '_id',

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

			if(!this.isNew()) {
				this.save();
			}
			
			this.trigger('change');
		}
	},

	// finds an ingredient entry with the given indgredient id
	getIngredientById: function(ingredientId) {
		return _.findWhere(this.get('ingredients'), { _id: ingredientId });
	},

	removeById: function(id) {
		this.set('ingredients', _.filter(this.get('ingredients'), function(ingredient) {
		  return ingredient.get('_id') !== id;
		}));
		if(!this.isNew()) {
			this.save();
		}
		this.trigger('change');
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
			_id: this.get('_id'),
			name: this.get('name'),
			ingredients: this.get('ingredients').map(function(item) {
				return item.toJSON();
			})
		}
	},

	parse: function(res, options) {
	  return {
	  	_id: res._id,
	  	name: res.name,
	  	ingredients: res.ingredients.map(function(props) {
	  	  return new Ingredient(props);
	  	})
	  }
	},

	toArray: function() {
		return {
			_id: this.get('_id'),
			name: this.get('name'),
			ingredients: this.get('ingredients').map(function(item) {
				return item.toJSON();
			})
		}
	},

})