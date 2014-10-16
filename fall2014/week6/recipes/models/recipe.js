/**
 * Base recipe class to define all the
 * properties of a recipe in this application
 * @param {string} title       Title of recipe
 * @param {string} description Description of recipe
 */
var Recipe = function(title, description){
	this.title = title;
	this.description = description;
};

// Export this to the application
module.exports = Recipe;