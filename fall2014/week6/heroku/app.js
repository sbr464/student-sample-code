var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

// Allow heroku to set the port for our
// application. If it is not set in the
// environment (like on our local machines)
// then we'll set our own port number to use.
// Make sure to check package.json for the
// remaining parts to make sure Heroku knows
// how to actually run your app!
var port = process.env.PORT || 5412;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
