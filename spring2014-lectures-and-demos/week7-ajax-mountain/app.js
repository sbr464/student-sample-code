var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var mountains = [];

app.get('/', function(req, res) {
	res.render('index', {
		mountains: mountains
	});
});

// add a new mountain
app.post('/mountain', function(req, res) {

	// do some validation first...

	mountains.push({
		name: req.body.name,
		elevation: req.body.elevation
	});

	res.send(mountains);
});

// get a list of all mountains
app.get('/mountains', function(req, res) {
	res.send(mountains);
});

var server = app.listen(7582, function() {
	console.log('Express server listening on port ' + server.address().port);
});
