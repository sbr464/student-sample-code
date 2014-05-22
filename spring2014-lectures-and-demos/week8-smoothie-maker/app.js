var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// require controllers
var indexController = require('./controllers/index-controller.js');
var recipesController = require('./controllers/recipes-controller.js');
var ingredientsController = require('./controllers/ingredients-controller.js');

// initialize express app
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// connect to mongo with mongoose
mongoose.connect('mongodb://localhost/smoothie-maker');

// routes
app.get('/', indexController.view);

// API
app.get('/recipes', recipesController.list);
app.get('/ingredients', ingredientsController.list);

// start thes server
var server = app.listen(6813, function() {
	console.log('Express server listening on port ' + server.address().port);
});
