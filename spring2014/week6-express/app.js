// include the express module
var express = require('express');

// create the app object from express
var app = express();

// create a route that maps requests to the '/' to a route handler (function) that sends a response back to the user
app.get('/', function(req, res) {
	res.send('<h1>Hello Denver</h1>');
});

// create a route that maps requests to '/food' to a route handler that sends back a string
app.get('/food', function(req, res) {
	res.send('Watermelon');
});

// create a route that maps requests to 'city/SOMECITY' to a route handler that sends back the string 'Hello SOMECITY'
// :userCity is an Express pattern that parsed and stored in req.params.userCity
// req (request) is an object that contains information about the HTTP request
// res (response) is an object that allows you to send an HTTP response back to the user
app.get('/city/:userCity', function(req, res) {
	res.send('Hello ' + req.params.userCity);
});

// the response object has a redirect method that sends an HTTP 302 redirect response to the user
app.get('/google', function(req, res) {
	res.redirect('http://google.com');
})

// the user will never receive a response! So they wait for all eternity... or until they give up and time out.
app.get('/lostlover', function(req, res) {
})

// app.get creates a new route that will be listened for
// sets up a specific url to listen for and a specific function to call when that url is requested

var server = app.listen(3377, function() {
	console.log('Express server listening on port ' + server.address().port);
});
