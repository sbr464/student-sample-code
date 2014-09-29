/**
 * Book class for defining each individual
 * book and its title.
 * @param {string} title Title of the book
 */
var Book = function(title){
	this.title = title;
};

/**
 * Helper method on books to create
 * and store a reference to a new DOM
 * element that can be added to the page.
 * @return {jQuery} DOM element for the book
 */
Book.prototype.create = function() {
	// If the book instance already has an
	// element defined, no need to create a new one.
	if(this.element) return this.element;

	// If it didn't return above, then generate a new
	// dom element and attach it to this instance.
	this.element = $('<li>' + this.title + '</li>');

	// return the new dom element for usage outside the class
	return this.element;
};


/**
 * Defines a library that will hold
 * onto a list of book instances.
 */
var Library = function(){
	this.books = [];
};

/**
 * Helper function for adding books to the
 * library without needing to maintain the
 * array outside the class
 * @param {Book} book Book to add to the list
 */
Library.prototype.addBook = function(book) {
	this.books.push(book);
};

/**
 * Helper for rendering the library to the DOM.
 * It will also subsequently call the create()
 * method on any books contained in the books list.
 * @return {jQuery} DOM element for the library and books
 */
Library.prototype.create = function() {
	// If this library already has a dom element, just return it
	if(this.element) return this.element;

	// If it doesn't have a dom element, create a new one
	this.element = $('<ul>');

	// Loop over all the books in this library
	for (var i = 0; i < this.books.length; i++) {
		// Call the create() method on each book and
		// store a reference to that dom element
		var bookEl = this.books[i].create();

		// Append the books dom element to the
		// library dom element
		this.element.append(bookEl);
	};

	// Finally, just return the new element,
	// which has been filled with each book
	// already.
	return this.element;
};


// Create a couple book instances
var book1 = new Book('Book 1');
var book2 = new Book('Book 2');
var book3 = new Book('Book 3');

// Create a new library instance
var library = new Library();

// Add the books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// create() the library instance and append its
// result to the #library-container element in
// the html. This create() will also call create
// on each book in the library instance.
$('#library-container').append( library.create() );