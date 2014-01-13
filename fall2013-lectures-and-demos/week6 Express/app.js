
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname +'/views'))


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//serve a static file
app.get('/', function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		res.setHeader('Content-Type', 'text/html')
		res.send(data)
	})
});

// ROUTES
app.get('/users', function(req, res){
	console.log(req.query)
	res.send('<h1>users</h1>')
});

app.get('/users/settings', function(req, res){
	res.send('<h1>users/settings</h1>')
});

app.get('/users/settings/admin/kittens/happyfuntimes', function(req, res){
	console.log(req.query)
	res.send('<h1>HAPPY FUN TIMES!</h1>')
});

app.get('/users/settings/admin/kittens/happyfuntimes/:color', function(req, res){
	res.send('<h1>' + req.params.color + '</h1>')
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success')
});

app.get('/success', function(req, res){
	res.send('<h1>SUCCESS!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>')
});

//END ROUTES

// DEFINE AND START SERVER
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



