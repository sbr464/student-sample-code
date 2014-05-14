var Animal = require('../models/animal.js');

var animalController = {

	form: function(req, res) {
		res.render('form');
	},

	create: function(req, res) {

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

	},

	getolder: function(req, res) {

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
	},

	index: function(req, res) {
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
	}

};

module.exports = animalController;