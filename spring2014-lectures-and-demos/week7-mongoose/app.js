var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// connect to a database with a connection string
mongoose.connect('mongodb://localhost/zoo');

// mongoose.model creates a constructor
// first arg: the singular of the collection name
// second arg: the schema (an object specifying the properties that will be defined for each document in this collection)
// create one model for each collection
var Animal = mongoose.model('animal', {
	name: String,
	diet: String,
	age: Number
});

app.get('/', function(req, res) {

	// finds all documents in the animals collection which match the query (all animals here)
	// first argument is the query object
	// second argument is the nodeback (a callback with two arguments, error and data)
	Animal.find({}, function(err, animals) {
		if(err) {
			console.log(err);
			res.send(500, 'There was an error finding animals.');
			return;
		}

		// first arg: name of view file (jade file)
		// second arg: view data
		res.render('index', {
			animals: animals
		});

	});

	// code out here is executed BEFORE we get the database query back!
	// Below does not work! It is called too early.
	// console.log(animals);
});

app.all('/new', function(req, res) {

	// to create a new document using mongoose, instantiate a new model, then save
	var elephant = new Animal({
		name: req.query.name || req.body.name || 'elephant',
		age: req.query.age || req.body.age || 0
	});

	elephant.save(function(err, data) {

		// check if there's an error
		if(err) {
			console.log(err);
			res.send(500, 'There was an error creating a new elephant.');
			return;
		}

		// send a success message
		res.send(201, 'Success!');

	})

})

app.get('/form', function(req, res) {
	res.render('form');
})

app.get('/:name/getolder', function(req, res) {

	Animal.findOne({ name: req.params.name }, function(err, animalDoc) {

		// check if there's an error
		if(err) {
			console.log(err);
			res.send(500, 'There was an error searching for your animalDoc.');
			return;
		}

		animalDoc.age++;
		// animalDoc.name += '!';

		animalDoc.save(function(err, data) {
			res.send(req.params.name + ' is ' + animalDoc.age + ' years old');
		});


	});

});

var server = app.listen(4151, function() {
	console.log('Express server listening on port ' + server.address().port);
});
