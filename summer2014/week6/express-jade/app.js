var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// res.send('<h1>Hello Boulder</h1>');
	res.render('index');
});

var server = app.listen(5567, function() {
	console.log('Express server listening on port ' + server.address().port);
});
