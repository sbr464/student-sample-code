
/**
 * Module dependencies.
 */

// require (without ./) looks:
//   - built-in node module
//   - node_modules
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
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

// this would normally come from a database
var openSlots = 5;

// route - A mapping between a method+url and a function (code to execute when a request is made to that url)

// First argument: url
// Second argument: route handler - A function with two parameters: request and response
app.get('/', function(req, res) {
	
	// at the very least, we need to send SOMETHING back to the client with one of the following two methods:

	// Highlander!!!! only ONE res.send/res.render
	// always the LAST step on the server

	var bootcampData = { 
		name: 'RefactorU', 
		city: 'Boulder', 
		description: 'web development bootcamp' 
	}

	// send raw data to the client
	//res.send('test');
	//res.send(bootcampData);

	// process a view then send it to the client
	// (converts the template to HTML)
	// (looks for the view based on configuration above)
	// First argument: name of the view (will append .jade)
	// Second argument: data to send to the view
	res.render('index', bootcampData);
})

app.get('/attend', function(req, res) {
	var responseData = {
		openSlots: openSlots,
		status: 'success',
		more: [1,2,3,4,5]
	};
	res.send(responseData);
})

// "static file server" (handled automatically by express in the public folder - so you don't have to do this!)
/**app.get('/stylesheets/style.css', function(req, res) {
	fs.readFile(path.join(__dirname, '/public/stylesheets/style.css'), function(error, data) {
		res.setHeader('Content-Type', 'text/css')
		res.send(data);
	})
})*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
