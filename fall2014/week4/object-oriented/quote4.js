/*
	Update the Quote class to include a changeText method
	that will take in new text as a parameter and changes both
	the value of that property on the instance, but also updates
	the dom element on the page.
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
	// Don't create a new element if this instance already has one
	if(this.element) return this.element;

	// Store the created DOM element's reference in
	// the instance of the class
	this.element = $(
		'<div class="' + className + '">' +
		'<span class="quote-text">' + this.text + '</span>' +
		' - ' + this.author +
		'</div>'
	);

	// Give element back to user
	return this.element;
};

/**
 * Change the color of the DOM element that represents
 * this quote instance.
 * @param  {string} color Color to change to
 */
Quote.prototype.changeColor = function(color){
	// Ensure that a dom element exists on this instance
	// before trying to manipulate it
	if(!this.element) this.create('quote-item');

	// Reference the stored DOM element and adjust its color
	this.element.css('color', color);
};

/**
 * Change the text of this quote instance, both
 * at the property level and at the DOM level
 * @param  {string} newText Text to change to
 */
Quote.prototype.changeText = function(newText){
	if(!this.element) this.create('quote-item');
	
	this.text = newText;
	this.element.find('.quote-text').text(newText);
};

var myQuote = new Quote('Object Oriented!', 'Chris');
$('body').append( myQuote.create('quote-item') );
myQuote.changeColor('red');