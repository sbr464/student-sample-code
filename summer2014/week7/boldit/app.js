var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/boldit')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/list', indexController.list);
app.post('/submit', indexController.submit);
app.post('/vote', indexController.vote);

var server = app.listen(3981, function() {
	console.log('Express server listening on port ' + server.address().port);
});
