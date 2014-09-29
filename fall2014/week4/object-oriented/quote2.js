/*
	Quote Part II:
		Update Quote class to include two new methods:
			1) countWords: return the number of words in the quote text
			2) create: returns a new DOM element (using jQuery) to represent the quote.

		Log the countWords value to console

		Use jQuery to append the result of calling the create method
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
 * Called on instances of Quotes. Will generate
 * and return a reference to a unique new DOM element.
 * @param  {string} className Class name to attach to the element
 * @return {jQuery}           DOM element
 */
Quote.prototype.create = function(className){
	return $(
		'<div class="' +
		className + '">' +
		this.text + ' - ' + this.author +
		'</div>'
	);
};

var myQuote = new Quote('Programming is great!', 'Chris');

console.log( 'myQuote:', myQuote.text, myQuote.author );

// Print out the number of words in the given quote
console.log( 'myQuote word count:', myQuote.countWords() );

// Insert the quote into the DOM
// using the create method specified on the prototype
$('body').append( myQuote.create('quote-item') );
