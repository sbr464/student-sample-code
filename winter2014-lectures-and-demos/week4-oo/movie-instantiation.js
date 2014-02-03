// naive object instantiation
var createMovie = function(title, releaseYear) {
	return {
		title: title,
		releaseYear: releaseYear,
		getAge: function() {
			var date = new Date();
			var age = date.getFullYear() - this.releaseYear;
			return age;
		}
	};
};

var movies = [];
var newMovie = createMovie('Cool Runnings', 1995);
movies.push( newMovie );


// object instantiation with constructor
var Movie = function(title, releaseYear) {
	this.title = title;
	this.releaseYear = releaseYear;
	this.getAge = function() {
			var date = new Date();
			var age = date.getFullYear() - this.releaseYear;
			return age;
	};
};

var movies = [];
var newMovie = new Movie('Cool Runnings', 1995);
movies.push( newMovie );
