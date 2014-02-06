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

var movieDetails = ['Inception', 'really hard to understand', 'pretty dramatic'];
var movieOutput = 'My favorite movie was {0} and it was {1}. I suppose you could say it was {2}!'.supplant(movieDetails);