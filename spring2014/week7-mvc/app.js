var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var animalController = require('./controllers/animal.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// connect to a database with a connection string
mongoose.connect('mongodb://localhost/zoo');

// routes
app.get('/', animalController.index);
app.all('/new', animalController.create)
app.get('/form', animalController.form);
app.get('/:name/getolder', animalController.getolder);

// a more restful set of routes would look like this:
// app.get('/animal', animalController.index);
// app.get('/animal/form', animalController.form);
// app.post('/animal', animalController.create)
// app.put('/animal/:name/getolder', animalController.getolder);

// other routes would go down here:
// app.get('/', visitorController.index);
// app.all('/new', visitorController.create)
// app.get('/form', visitorController.form);
// app.get('/:name/getolder', visitorController.getolder);

// start server
var server = app.listen(4151, function() {
	console.log('Express server listening on port ' + server.address().port);
});
