/*
	Challenge:

	Create a Media class that has a name property and a view method
	that console logs 'Viewing <media name>'.

	Create a Picture class that extends Media and adds a property for
	image url and a create() method that appends the image to the page.
 */

/**
 * Media item class for generically handling
 * any media that can be displayed.
 * @param {string} name Name of this item
 */
var Media = function(name){
	this.name = name;
};

/**
 * Method for handling viewing this
 * media item. Might render something
 * to the page, but for the base class
 * and any other subclasses that don't
 * override this method, they will just
 * console log the name
 */
Media.prototype.view = function() {
	console.log('Viewing ' + this.name);
};

/**
 * Pictures extend from Media and also
 * handle an image url property.
 * @param {string} name Name for the picture
 * @param {string} url  URL where the picture is located
 */
var Picture = function(name, url){
	Media.call(this, name);
	this.url = url;
};
// inherit the prototype
Picture.prototype = new Media();
Picture.prototype.constructor = Picture;

/**
 * Override the base "view" method
 * so that we can generate a DOM
 * element on the fly whenever
 * "view" is called.
 * @return {jQuery} jQuery-wrapped DOM element
 */
Picture.prototype.view = function() {
	return $('<img src="' + this.url + '">');
};


/////////////
// TESTING //
/////////////

var myPicture = new Picture('Kitten', 'http://www.hdwallpapersinn.com/wp-content/uploads/2014/08/little_cute_cat_1920x1080.jpg');

$('body').append(myPicture.view());

console.log('Picture:', myPicture.url);