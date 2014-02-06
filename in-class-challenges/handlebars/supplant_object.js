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

//=====================================

var favoriteSong = {
	title: 'Friday',
	artist: 'Rebecca Black',
	reason: 'it really speaks to me.'
};
console.log( 'My favorite song is {title} by the very talented {artist}. It is my favorite because {reason}.'.supplant(favoriteSong) );