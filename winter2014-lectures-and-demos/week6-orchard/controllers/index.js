var orchard = require('../models/orchard.js');

module.exports = {
	index: function(req, res) {
		// first argument: name of the jade file (string)
		// second argument: view data (object)
		res.render('index', { 
			title: 'Orchard',
			trees: orchard.findAll()
		});
	}
};
