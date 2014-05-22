$(function() {
  
  // fetch the data from the server
	var recipeBox = new RecipeBox();
	var availableIngredients = new AvailableIngredients();
	recipeBox.fetch({ reset: true });
	availableIngredients.fetch({ reset: true });

	// create the views and set their models
	window.ingredientsChooser = new IngredientsChooser({ collection: availableIngredients });
	window.recipeBoxView = new RecipeBoxView({ collection: recipeBox });
	window.recipeMaker = new RecipeMaker({ model: new Recipe() });

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

	// when a recipe is blended, show the results and ask to save
	recipeMaker.on('blended', function() {
		recipeMaker.model.setName();
		var modal = recipeMaker.showBlendedModal();
		modal.on('save', function(recipe) {
			recipeBox.add(recipe);
		});
	})

	// set up Handlebars helpers

	// pluralize a string
	// usage: {{questions.length}} {{pluralize questions.length "Question"}}
	Handlebars.registerHelper('pluralize', pluralize);

})