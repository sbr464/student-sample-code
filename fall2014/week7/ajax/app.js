// THIS IS SERVER-SIDE ONLY

// Core requires for each module
var express = require('express');
var bodyParser = require('body-parser');

// Pull in our controller
var indexController = require('./controllers/index.js');

// Set up the application via express
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Serve our static files from the public directory
app.use(express.static(__dirname + '/public'));

// Allow express to parse incoming form data
app.use(bodyParser.urlencoded({extended: false}));

// Add a listener for the homepage
app.get('/', indexController.index);

// This could be considered our own API route.
// It will allow the user to request a set of
// random numbers.
app.get('/getNumber', indexController.getNumber);

// Start the server!
var server = app.listen(3923, function() {
	console.log('Express server listening on port ' + server.address().port);
});
