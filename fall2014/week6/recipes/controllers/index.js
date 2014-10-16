var recipeBox = require('../models/recipeBox.js');

// seed the dataset with some sample recipes:
recipeBox.addRecipe(
	'Banana Nut Bread',
	'Bananas + nuts + bread -> bake'
);
recipeBox.addRecipe(
	'Lasagna',
	'Call garfield and ask him, because he\'ll know'
);

var indexController = {
	index: function(req, res) {
		// Render the index view and tell
		// it about our sweet recipe box
		res.render('index', {
			recipeBox: recipeBox
		});
	},

	view: function(req, res){
		// Get the recipeName from the url parameters
		var recipeTitle = req.params.recipeTitle;

		// Get the matching recipe
		var recipe = recipeBox.getByTitle(recipeTitle);

		// Render a recipe view
		res.render('recipe', {
			recipe: recipe
		});
	},

	addRecipe: function(req, res){
		// Get the variables from the submitted form
		var title = req.body.title;
		var description = req.body.description;

		// Create a new recipe in the box and use
		// the given form data
		recipeBox.addRecipe(title, description);

		// Actually give the browser a response,
		// which in this case will tell it just
		// to go back to the homepage
		res.redirect('/');
	},

	deleteRecipe: function(req, res){
		// Get the recipeName from the url parameters
		var recipeTitle = req.params.recipeTitle;

		// Remove a recipe by its title
		recipeBox.removeByTitle(recipeTitle);

		// Send the user back to the homepage
		res.redirect('/');
	}
};

module.exports = indexController;