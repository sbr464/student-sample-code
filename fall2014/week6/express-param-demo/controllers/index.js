var data = {
  key1: {next: 'key2'},
  key2: {next: 'key3'},
  key3: {next: 'key1'}
};

var indexController = {
	index: function(req, res) {
    var incomingLocation = req.params.location;

		res.render('index', {
      location: data[incomingLocation]
    });
	}
};

module.exports = indexController;