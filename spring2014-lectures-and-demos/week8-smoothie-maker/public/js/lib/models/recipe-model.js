var Recipe = Backbone.Model.extend({

	defaults: {
		name: '',

		// array of {
		//   quantity: Number,
		//   ingredient: Ingredient
		// }
		ingredients: []
	},

	smoothieNames: [
		'Explosion', 'Sunrise', 'Extravaganza', 'Activator', 'Charger', 'Twist', 'Blast', 'Paradise', 'Heaven', 'Glory'
	],

	// adds a new ingredient or ups the count if it exists
	// fires the change event
	add: function(ingredient) {

		// look for an existing ingredient entry
		var ingredientEntry = this.getEntry(ingredient);
		// console.log('entry', ingredientEntry, ingredient);

		// if it's doesn't exist, make a new one
		if(!ingredientEntry) {
			ingredientEntry = {
		  	quantity: 0,
		  	ingredient: ingredient
		  };
		  this.get('ingredients').push(ingredientEntry);
		}

	  // increase the quantity
	  ingredientEntry.quantity++;
	  // console.log('ingredients', this.get('ingredients'));

	  // add the ingredient entry
	  this.trigger('change', ingredientEntry);
	},

	// finds the ingredient entry with the given ingredient
	getEntry: function(ingredient) {
		return _.findWhere(this.get('ingredients'), { ingredient: ingredient });
	},

	// finds an ingredient entry with the given indgredient id
	getEntryById: function(ingredientId) {
		return _.find(this.get('ingredients'), function(entry) {
		  // console.log( 'find', entry.ingredient.get('_id'), ingredientId );
		  return entry.ingredient.get('_id') === ingredientId;
		});
	},

	// remove entries with 0 quantity
	clean: function() {
	  this.set('ingredients', this.get('ingredients').filter(function(entry) {
	    return entry.quantity > 0;
	  }));
	},

	// generate a name for this unique recipe
	makeName: function() {

		var entries = this.get('ingredients');

		// if they just blended one ingredient, give them soup!
		if(entries.length === 1) {
			return entries[0].ingredient.get('name') + ' Soup';
		}
		else {
			// sort ingredients by quantity, descending
		  var sorted = _.sortBy(entries, function(entry) {
		    return -entry.quantity;
		  })

		  // get the first two ingredients to use in the name (e.g. Strawberry-Peach)
		  var namePrefix = sorted.slice(0,2).map(function(entry) {
		    return entry.ingredient.get('name');
		  }).join('-');

		  return namePrefix + ' ' + _.sample(this.smoothieNames);
		}

	},

	setName: function() {
	  this.set('name', this.makeName());
	},

	// override toJSON so that ingredients are toJSON'd
	// is this the best way
	toJSON: function() {
	  return {
	  	name: this.get('name'),
	  	ingredients: this.get('ingredients').map(function(item) {
	  		return {
	  			quantity: item.quantity,
	  			ingredient: item.ingredient.toJSON()
	  		}
	  	})
	  }
	},

})