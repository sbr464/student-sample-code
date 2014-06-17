var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvc-users');

var userController = require('./controllers/user');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Render index with the list of all users
app.get('/', userController.viewList);

// Listen for posts to '/user/add' and forward them
// to the addUser method on our user controller
app.post('/user/add', userController.addUser);

// Listen for requests to view a specific user
app.get('/user/view/:id', userController.viewUser);

var server = app.listen(8534, function() {
	console.log('Express server listening on port ' + server.address().port);
});
