// This controller is very simple
// since we don't have any complicated
// logic or routes to handle.
var indexController = {
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = indexController;