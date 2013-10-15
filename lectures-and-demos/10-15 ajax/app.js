
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// Twitter
var twitter = require('twitter-api').createClient();
twitter.setAuth( 
	'your consumer key',
    'your consumer secret', 
    'some access key',
    'some access secret'
)

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
var fs = require('fs')

app.get('/', function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		res.setHeader('Content-type', 'text/html');
		res.send(data)
	})
});

// Sample JSON
app.get('/myjson', function(req, res){
	
	var json = {
		students : [
			"Raphael",
			"Jess",
			"Mike",
			"billybob"
		],
		mind : ""
	};

	res.send(json)
});

// Signup form with spinner
// Remember the setTimeout is just to simulate a slow server
app.post('/signup', function(req, res){
	
	console.log(req.body.email)

	setTimeout(function(){

		// if there is a bit of data called "email" in the response body
		// then return a JSON object with a property called "success"
		if(req.body.email){
			res.send({success : 'Success!'})
		}
		else{ // If there isnt a bit of data called "email", return an error
			res.send({error : "Please provide your e-mail."})
		}

	}, 2000)
})

// Tweets endpoint
app.get('/tweets', function(req, res){
	twitter.get('search/tweets', { q: '#Fitness', count : 5 }, function(response){
		console.log(response)
		res.send(response)
	})
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
