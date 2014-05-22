$(function() {
  
  // fetch the data from the server
	recipeBox = new RecipeBox();
	var availableIngredients = new AvailableIngredients();
	recipeBox.fetch({ reset: true });
	availableIngredients.fetch({ reset: true });

	// create the views and set their models
	var ingredientsChooser = new IngredientsChooser({ collection: availableIngredients });
	var recipeBoxView = new RecipeBoxView({ collection: recipeBox });
	var recipeMaker = new RecipeMaker({ model: new Recipe() });

	// set the rendering destination of the three main views
	// setElement is going to set view.el and view.$el so that our render function knows where to render the Handlebars template
	ingredientsChooser.setElement($('#ingredients-chooser'));
	recipeBoxView.setElement($('#recipe-box'));
	recipeMaker.setElement($('#recipe-maker'));

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