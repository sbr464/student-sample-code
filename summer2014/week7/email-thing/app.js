var express = require('express');
var bodyParser = require('body-parser');

// Connect to the database
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/email-thing'
);

// Require our base controller
var indexController = require('./controllers/indexController.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Add the home route
app.get(
  '/', indexController.index
);

// Handle incoming message saves
app.post(
  '/newMessage', indexController.addMessage
);

// Handle getting messages for a user
app.get(
  '/getMessages', indexController.getMessages
);

var server = app.listen(5052, function() {
	console.log('Express server listening on port ' + server.address().port);
});