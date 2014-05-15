var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var weatherController = require('./controllers/weather.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.index);
app.get('/weather', weatherController.index);

var server = app.listen(9788, function() {
	console.log('Express server listening on port ' + server.address().port);
});
