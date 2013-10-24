
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , Airport = require('./models/airport.js')
  , Person = require('./models/person.js')
  , Passenger = require('./models/passenger.js')
  , Crew = require('./models/crew.js')
  , Plane = require('./models/plane.js')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
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

var airports = {};

// setup the mock data
function setup() {

	airports = {
		dia: new Airport('Denver'),
		lga: new Airport('New York'),
		las: new Airport('Las Vegas'),
		lax: new Airport('Los Angeles'),
		msp: new Airport('Minneapolis')
	};

	// add dia planes
	for(var i=0; i<3; i++) {
		var newPlane = new Plane(180, 10000, 5000, 5000);
		airports.dia.planes.push(newPlane);
	}

	// add msp planes
	for(var i=0; i<5; i++) {
		var newPlane = new Plane(120, 8000, 5000, 5000);
		airports.msp.planes.push(newPlane);
	}
}


// req.body.___			POST form data
// req.query.___		GET query string
// req.params.___		URL pattern matching
app.get('/airport/:code', function(req, res) {
	var airportCode = req.params.code;
	var airport = airports[airportCode];

	if(airport) {

		// res.send('The airport city is ' + airport.city);
		// First argument: name of the view (jade file)
		// Second argument: view data (object)
		res.render('airport', airport);
	}
	else {
		res.send('The airport you entered is not valid.');
	}

})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  setup();
});
