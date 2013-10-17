
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// this determines the port
app.set('port', process.env.PORT || 3001);

// configure where to look for views
app.set('views', __dirname + '/views');

// configure the view engine (templating engine)
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// configures a static file server in the public directory
// (any file in this folder, can be accessed via a GET request
// that matches the file path (minus 'public')
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// default routes supplied by express
//app.get('/', routes.index);
//app.get('/users', user.list);

app.get('/', function(req, res) {
	// first argument: view
	// index -> index.jade -> views/index.jade
	res.render('index');
});

app.get('/getdiagnosis', function(req, res) {

	// access data passed from the client using:
	// GET:  req.query.___
	// POST: req.body.____

	var diagnosis;
	if(req.query.bodyPart === 'leg') {
		diagnosis = 'Your leg is probably broken.';
	}
	else if(req.query.bodyPart === 'stomach') {
		diagnosis = 'You have an ulcer. I\'m sure of it.';
	}
	else if(req.query.bodyPart === 'head') {
		diagnosis = 'Let\'s get you a lobotomy right away.';
	}

	res.send(diagnosis);
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
