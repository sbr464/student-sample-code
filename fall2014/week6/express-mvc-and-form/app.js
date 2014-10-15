var express = require('express');
// Require the body parser module
var bodyParser = require('body-parser');

// Require our controllers
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Inject the body parsing functionality into
// the express middleware chain
app.use(bodyParser.urlencoded({extended: false}));

// Routing for the home page
app.get('/', indexController.index);

/*
// This does the same thing, but would
// mean that all our logic would be stuck
// inside of app.js, which would make it
// very unwieldy.
app.get('/', function(req, res){
	res.render('index');
});
 */

// Routing for the about page
app.get('/about', indexController.about);

// Routing for our API
app.post('/dessertSubmit', apiController.addDessert);


var server = app.listen(5947, function() {
	console.log('Express server listening on port ' + server.address().port);
});
