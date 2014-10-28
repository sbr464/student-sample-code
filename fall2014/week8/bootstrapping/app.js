var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index', {
		otherCities: ['Seattle', 'Austin', 'Atlanta']
	});
});

var server = app.listen(3724, function() {
	console.log('Express server listening on port ' + server.address().port);
});
