var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/numbers', function(req, res) {

	// whatever we pass to res.send, get assigned to the $.get callback argument on the client-side
	res.send({
		total: 5,
		numbers: [
			Math.random(),
			Math.random(),
			Math.random(),
			Math.random(),
			Math.random()
		]
	})
})

var server = app.listen(8096, function() {
	console.log('Express server listening on port ' + server.address().port);
});
