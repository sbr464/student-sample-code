var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var async = require('async')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var gistIds = ['46412d610a8f6e24391d', '10394189', '9924743']

app.get('/', function(req, res) {
	
	// generate an array of task functions that fit async.js
	var tasks = gistIds.map(function(id) {

		// return the task function
		// which is a single gist request
		return function(callback) {

			var options = {
				url: 'https://api.github.com/gists/' + id,
				headers: {
					'User-Agent': 'request'
				}
			}

			request(options, function(error, response, body) {

				// check if the request succeeded
				if(error || response.statusCode !== 200) {
					callback(body || 'ERROR')
				}
				else {
					// invoke the callback, which signals to async.js that this specific task was successful.
					// async.js will add the body to the correct place in the final results array
					callback(null, JSON.parse(body))
				}

			})
		}
	})

	// invoke all the tasks in parallel
	async.parallel(tasks, function(error, results) {
		if(error) {
			res.send(500, error)
		}
		else {
			res.render('index', {
				gists: results
			})
		}
	})

});

var server = app.listen(9265, function() {
	console.log('Express server listening on port ' + server.address().port);
});
