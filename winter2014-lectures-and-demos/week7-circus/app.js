
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3006);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.configure(function() {
mongoose.connect('mongodb://localhost/circus');
// });

// define schema
var EntertainerSchema = new mongoose.Schema({
  name:String,
  age: Number,
  job: String
});

// define model
var EntertainerModel = mongoose.model('entertainer', EntertainerSchema);

// route
app.get('/clown/save/:name', function(req, res) {

	// create a new document
	var newEntertainer = new EntertainerModel({
		name: req.params.name,
		age: 80,
		job: 'clown'
	});

	// save the document to the database
	newEntertainer.save();

	// send a response back to the client
  res.send('clown created');
});

app.get('/', function(req, res) {
  
	EntertainerModel.find({}, function(err, docs) {
		res.render('entertainers', {
			entertainers: docs
		});
	  // res.send(docs);
	});

	// always executes *before* the database returns its data!
});

app.get('/clown/remove/:name', function(req, res) {
  
	EntertainerModel.remove(
		{ name: req.params.name },
		function(err, data) {
		  res.send('Clown removed! ' + data)
		}
	);

})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
