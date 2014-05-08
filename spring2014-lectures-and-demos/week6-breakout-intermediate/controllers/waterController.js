var fs = require('fs');
var path = require('path');

module.exports = {

	water: function(req, res) {
		var waterFile = path.join(__dirname, '../views/water.html');
		fs.readFile(waterFile, 'utf-8', function(err, data) {
			if(err) {
				console.error('Error retrieving water.html');
				res.send(500, 'So sorry');
				return;
			}

			res.send(data);
		})
	},

	water2: function(req, res) {
		res.render('water2');
	}

};