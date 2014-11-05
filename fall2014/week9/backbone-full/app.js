var express = require('express');
var bodyParser = require('body-parser');

// Our two controllers:
//		indexController handles basic viewing of the core pages
var indexController = require('./controllers/index.js');
// 		flightController handles all the CRUD operations for
// 		birds (Create Read Update Delete)
var flightController = require('./controllers/flightController.js');

// Since we want to persist our data, let's also include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flockaseagulls');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// When Backbone makes calls to the server, it
// creates the calls using JSON, so we also
// need to support parsing data in that format
app.use(bodyParser.json());

// Our homepage, which will also kick
// off our Backbone application and bootstrap
// it with some preliminary data
app.get('/', indexController.index);

// This is our API handler, so a single
// post request to the root '/birds' means
// we want to insert a new bird
app.post('/birds', flightController.addBird);

var server = app.listen(9529, function() {
	console.log('Express server listening on port ' + server.address().port);
});
