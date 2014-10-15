var express = require('express');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:location', indexController.index);

var server = app.listen(8903, function() {
	console.log('Express server listening on port ' + server.address().port);
});
