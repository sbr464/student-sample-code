var orchard = require('../models/orchard.js');

module.exports = {
	fruit: function(req, res) {
		// first argument: name of the jade file (string)
		// second argument: view data (object)
		res.render('index', { 
			title: 'Orchard',
			trees: orchard.find(req.params.fruit)
		});
	}
};
