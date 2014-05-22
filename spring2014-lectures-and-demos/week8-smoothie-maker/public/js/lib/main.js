$(function() {
  
  // fetch the data from the server
	var recipeBox = new RecipeBox();
	var availableIngredients = new AvailableIngredients();
	recipeBox.fetch({ reset: true });
	availableIngredients.fetch({ reset: true });

	// create the views and set their models
	ingredientsChooser = new IngredientsChooser({ collection: availableIngredients });
	recipeBoxView = new RecipeBoxView({ collection: recipeBox });
	recipeMaker = new RecipeMaker({ model: new Recipe() });

	// set the rendering destination of the three main views
	ingredientsChooser.setElement($('#ingredients-chooser')[0]);
	recipeBoxView.setElement($('#recipe-box')[0]);
	recipeMaker.setElement($('#recipe-maker')[0]);

	// render
	ingredientsChooser.render();
	recipeBoxView.render();
	recipeMaker.render();

	// attach events

	// when you choose an ingredient, add it to the recipeMaker
	recipeMaker.listenTo(ingredientsChooser, 'choose', function(ingredient) {
	  recipeMaker.model.add(ingredient);
	})

	// when you choose a recipe from the recipe box, put it in the recipe maker
	recipeMaker.listenTo(recipeBoxView, 'select', function(recipe) {
	  recipeMaker.setModel(recipe);
	})

	// when a recipe is blended, show the results and ask to save
	recipeMaker.on('blended', function(recipe) {
		recipe.setName();
		var modal = recipeMaker.showBlendedModal();
		modal.on('save', function(recipe) {
			recipeBox.add(recipe);
			recipe.save();
			recipeBoxView.render();
		});
	})

})