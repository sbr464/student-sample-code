var indexController = {
	// Route for the homepage
	index: function(req, res){
		// Render the index.jade view
		res.render('index');
	}
};

module.exports = indexController;