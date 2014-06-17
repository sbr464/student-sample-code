var express = require('express');
var bodyParser = require('body-parser');

// Require our controllers
var indexController = require('./controllers/indexController');
var twitterController = require('./controllers/twitterController');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Allow indexController.index to handle the home route
app.get('/', indexController.index);

// Route handler for flickr search
app.get('/twitter/search', twitterController.search);

var server = app.listen(5851, function() {
	console.log('Express server listening on port ' + server.address().port);
});
