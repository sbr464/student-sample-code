// From Douglas Crockford - Remedial Javascript
// http://javascript.crockford.com/remedial.html
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


var Quote = function(initialText, initialAuthor) {
	this.text = initialText || 'No quote text';
	this.author = initialAuthor || 'Anonymous';

	// var countWords = ...
	this.countWords = function() {
		var words = this.text.split(' ');
		return words.length;
	};

	this.create = function() {
		return $('<div class="quote">{0} <div class="author">-{1}</div> </div>'.supplant([this.text, this.author]))
	};
};

var myQuote = new Quote('Livin La Vida Loca', 'Ricky Martin');
var anonQuote = new Quote();


