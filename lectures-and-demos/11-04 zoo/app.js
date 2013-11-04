
/**
 * Module dependencies.
 */

// WHERE REQUIRE LOOKS
// 1. built-in node modules (e.g. http, path)
// 2. node_modules (added with npm install)
// 3. if starts with ./ then looks in current directory
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , Animal = require('./models/animal.js').Animal;

var app = express();

// all environments
app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// connect to database
mongoose.connect('mongodb://localhost/zoo');

// ROUTES
app.get('/', function(req, res) {

	// get animals from database
	Animal.find(function(err, animals) {
		res.render('index', {
			animals: animals
		});
	});

});

app.get('/manage', function(req, res) {
	res.render('manage');
});

// WHOLE THING: route
// 1st arg: url
// 2nd arg: route handler (a callback)
//	- anon function
// 	- named function, defined elsewhere
app.post('/add', function(req, res) {

	// 1. create new animal
	var newAnimal = new Animal({ 
		name: req.body.name,
		diet: req.body.diet
	});

	// save the animal to the database
	newAnimal.save(function (err) {
	  if (err) {
	  	console.log(err);
	  	res.send(500, 'Error encountered attempting to save new animal to database.')
	  }
	  else {
		  res.send('Success!');
		}
	});
});

app.post('/baby', function(req, res) {

	// 1. create a new animal
	var baby = new Animal({ 
		name: 'Cub',
		diet: 'carnivore'
	});

	// search the database for an animal with the given id
	Animal.update(
		// 1st arg: query
		{ _id: req.body.id }, 

		// 2nd arg: update command
		{ 
			$push: { 
				babies: baby
			}
		}, 

		// 3rd arg: callback
		function(err, parent) {

			// if there was an error, report it
			if(err) {
				console.log(err);
				res.send(500, 'There was an error finding the pregnant animal');
			}
			// otherwise, SUCCESS!
			else {

				// send baby to client
				res.send(baby)
			}
	})
});

// find all animals that have a baby less than 5 lbs
// db.animals.find({ babies: { $elemMatch: { weight: { $lt: 5 }}}})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
