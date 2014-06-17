var express = require('express');
var waterController = require('./controllers/waterController.js');
var indexController = require('./controllers/indexController.js');
var apiController = require('./controllers/apiController.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', indexController.home);
app.get('/water', waterController.water);
app.get('/water2', waterController.water2);
app.get('/next', apiController.next);

var server = app.listen(7687, function() {
	console.log('Express server listening on port ' + server.address().port);
});
