/*
	Modify the quote class to include a method for
	changing the color of a specific instance of Quote.
 */

/**
 * Quote class for maintaining individual quote items
 * @param {string} text   Text of the quote
 * @param {string} author Author of the quote
 */
var Quote = function(text, author){
	this.text = text || 'This quote has no text';
	this.author = author || 'This quote has no author';
};

/**
 * Given the text of this quote instance,
 * tell the user how many words are in the quote
 * @return {number} Number of words
 */
Quote.prototype.countWords = function(){
	return this.text.split(' ').length;
};

/**
 * Called on instances of Quotes. Will generate,
 * store, and return a reference to a new DOM element.
 * @param  {string} className Class name to attach to the element
 * @return {jQuery}           DOM element
 */
Quote.prototype.create = function(className){
	// Store the created DOM element's reference in
	// the instance of the class
	this.element = $(
		'<div class="' +
		className + '">' +
		this.text + ' - ' + this.author +
		'</div>'
	);

	return this.element;
};

/**
 * Change the color of the DOM element that represents
 * this quote instance.
 * @param  {string} color Color to change to
 */
Quote.prototype.changeColor = function(color){
	// Reference the stored DOM element and adjust its color
	this.element.css('color', color);
};

var myQuote = new Quote('Programming is great!', 'Chris');
$('body').append( myQuote.create('quote-item') );
myQuote.changeColor('red');

var myQuote2 = new Quote('Programming is cool and fun!', 'Chris');
$('body').append( myQuote2.create('quote-item') );
myQuote2.changeColor('green');