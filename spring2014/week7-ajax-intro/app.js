var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// home page
app.get('/', function(req, res) {
	res.render('index');
});

// users
app.get('/users', function(req, res) {
	// send data directly back to user
	// Express automatically sets the content-type to 'application/json' if we pass an array or object
	res.send(['noah', 'abby', 'wren']);
})

// user detail
app.get('/user', function(req, res) {

	var requestedUsername = req.query.username;

	var userDetails = {
		noah: 'A really smart chap.',
		abby: 'A glorious gal.',
		wren: 'A bird.'
	};

	// send back user details of the requested username
	// must be bracket notation, because the key we're using is indeterminate at develop-time. It needs to be evaluated based on the requestedUsername (dynamic)
	res.send({
		description: userDetails[requestedUsername]
	});

})

var server = app.listen(7178, function() {
	console.log('Express server listening on port ' + server.address().port);
});
