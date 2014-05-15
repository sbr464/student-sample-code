var request = require('request');

var weatherController = {
	index: function(req, res) {

		request('https://api.forecast.io/forecast/43dc08ed3ede8b2a4bbc3a4fa97c1f78/40.01656,-105.220155', function(err, response, body) {

			var bodyObject = JSON.parse(body);
			res.send(bodyObject.currently);

		})


	}
};

module.exports = weatherController;