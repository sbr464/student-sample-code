// This will include access to the Express
// module that is included via package.json
var express = require('express');

// Initialize the application by calling
// the function exported from express
var app = express();

// This is our Jade specific connection
// into the express process. Any time we
// call response.render('filename'), it
// knows to look in the views directory
// for the file we asked for by filename,
// and to pass it through the jade rendering
// system which was also included as a project
// dependency in our package.json
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// An express Route.
// This will be run against incoming
// urls to check for a match on what
// is passed as the first argument. The
// verb (in this case GET, but can also
// be POST, PUT, or DELETE) will also
// need to match. This is so you can get
// a page and also post to the same page
// but have entirely different functionality.
app.get('/', function(req, res) {
	// This function will be invoked
	// whenever the given url is a match.
	// Use the "response" object to send
	// a response back to the client machine.
	res.send('Welcome home!');
});

// Another route, this time for requests
// made to the about page.
app.get('/about', function(req, res) {
	res.send('I am the coolest.');
});

// Kick the server off and let it start
// to listen for incoming requests on a given
// port, in this case 8421. The second argument,
// a function, will be run when the server is
// ready and listening.
var server = app.listen(8421, function() {
	// A helpful message to let us know what port we are listening on
	console.log('Express server listening on port ' + server.address().port);

	// Just to see what the __dirname variable is set to
	console.log(__dirname);
});
