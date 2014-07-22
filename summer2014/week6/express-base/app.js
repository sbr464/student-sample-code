// INITIALIZE THE APPLICATION
// Require the express package
var express = require('express');

// Instantiate a new express application and store it in 'app'
var app = express();



// REGISTER ROUTE HANDLERS

// Handle all root url requests by sending back a string of html
app.get('/', function(req, res) {

	// Send the html string back to the client machine
	res.send('<h1>Hello Boulder! This is the homepage</h1>');
});

// Add a handler for the '/about' page
app.get('/about', function(req, res){

	// Send back some html to the requester
	res.send('<h1>About Page</h1>');
});

app.get('/test', function(req, res){
	res.send({a: 10, b:20});
});



// START THE APPLICATION AND LISTEN FOR INCOMING REQUESTS

// Set up the actual HTTP listener (port, onRunning)
var server = app.listen(7438, function() {

	// Print to terminal to let us know this thing actually works
	console.log('Express server listening on port ' + server.address().port);
});
