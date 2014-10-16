// Require the base Recipe class
var Recipe = require('./recipe.js');

// Define the base RecipeBox class.
// Instances will contain their own
// lists of recipes.
var RecipeBox = function(){
	this.recipes = [];
};

/**
 * Helper for quickly adding new recipes without
 * needing to generate a new instance in the caller
 * @param {string} title       Title of recipe
 * @param {string} description Description of recipe
 */
RecipeBox.prototype.addRecipe = function(title, description) {
	var newRecipe = new Recipe(title, description);
	this.recipes.push(newRecipe);
};

/**
 * Search through the recipe box to find
 * a single recipe that matches the given
 * search title
 * @param  {string} title Title to find
 * @return {Recipe}       Recipe found
 */
RecipeBox.prototype.getByTitle = function(title) {
	for (var i = 0; i < this.recipes.length; i++) {
		if(this.recipes[i].title === title){
			return this.recipes[i];
		}
	};
};

// Create a personal recipe box
var myRecipeBox = new RecipeBox();

// Make our recipe box available to any
// files that require it
module.exports = myRecipeBox;