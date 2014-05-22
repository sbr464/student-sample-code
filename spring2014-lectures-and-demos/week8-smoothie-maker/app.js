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
app.post('/recipes', recipesController.create);
app.get('/recipes', recipesController.read);
app.put('/recipes', recipesController.update);
app.delete('/recipes', recipesController.delete);

app.post('/ingredients', ingredientsController.create);
app.get('/ingredients', ingredientsController.read);
app.put('/ingredients', ingredientsController.update);
app.delete('/ingredients', ingredientsController.delete);

// start thes server
var server = app.listen(6813, function() {
	console.log('Express server listening on port ' + server.address().port);
});
