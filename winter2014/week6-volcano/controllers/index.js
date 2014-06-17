var VolcanoModel = require('../models/volcano.js');

module.exports = {

	home: function(req, res) {
		res.render('index.jade', {
			volcanoes: VolcanoModel.getAllVolcanoes()
		});
	},

	detail: function(req, res) {
		res.render('detail.jade', {
			volcano: VolcanoModel.getVolcano(req.params.name)
		});
	}

};