var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// This is a little different from the express
// basic generator in that it also includes this
// special middleware.
// Middleware is how Express detirmines execution
// order and each .get, .post, etc is also considered
// middleware.
// This specific "use" will say that at this point
// in execution order, all incoming requests will pass
// through the express.static() method. Express.static()
// returns a function that will look through the given
// directory for any files that match the incoming url.
// If it finds one, it will simply load it and send it back.
// If none are found, it will pass through this step
// and move to the next.
app.use(express.static(__dirname + '/public'));

// Declare some variables in the file scope.
var appName = 'A Cool App';
var libraries = [
	'Express',
	'Angular',
	'jQuery',
	'Backbone'
];

// Handle the homepage view
app.get('/', function(req, res) {
	// Render our "index.jade" template through
	// jade's compiler. The second argument, the object
	// is our jade-js lookup table, where the keys of the
	// object are what jade can access, and their values
	// are translated through the values of the object.
	res.render('index', {
		title: appName,
		libraries: libraries
	});
});

app.get('/about', function(req, res) {
	// Here we use the same view from the
	// homepage, but this time we send in
	// some different values, which gives
	// us different output HTML.
	res.render('index', {
		title: 'I don\'t care about the title',
		libraries: ['a', 'b']
	});
});

var server = app.listen(4207, function() {
	console.log('Express server listening on port ' + server.address().port);
});
