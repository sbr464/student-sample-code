var express = require('express');
var app = express();

// register jade as the view engine
// internally this will require('jade') so we need to ensure that jade is installed with npm install --save jade
app.set('view engine', 'jade');

// specify which directory stores all the jade files
// so when we call res.render('mypage'), it will automatically load 'views/mypage.jade'
app.set('views', __dirname + '/views');

// list of hikes
// for now this is hardcoded
// but really it would come from a database
var hikes = [
	'Bear Peak',
	'Sanitas',
	'Chataqua'
];

var user = {
	name: 'Raine',
	favoriteHike: 'Sanitas'
};

// route for home page
app.get('/', function(req, res) {
	// render views/index.jade
	// the second argument to res.render is the 'view data'
	res.render('index', {
 		// any properties on this object literal become part of the scope of the jade view
		boulderHikes: hikes,

		// the key is what it's called in the jade file
		// the property value is the actual data that gets sent to the view, and it is evaluated BEFORE being sent to the view
		currentUser: user
	});
});

app.get('/test', function(req, res) {
	// render views/test.jade
	res.render('test');
});

var server = app.listen(4594, function() {
	console.log('Express server listening on port ' + server.address().port);
});
