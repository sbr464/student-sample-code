/*
	Create a quote class that has two properties: text and author.
	It should accept these properties as
	parameters on the constructor.

	Create an instance of the Quote class and
	store it in a variable. Then console log both properties of the quote instance.

	BONUS: Provide default values for both parameters if none are provided.
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

var myQuote = new Quote('Programming is great!', 'Chris');
console.log('myQuote:', myQuote.text, myQuote.author);

var emptyQuote = new Quote();
console.log('emptyQuote:', emptyQuote.text, emptyQuote.author);