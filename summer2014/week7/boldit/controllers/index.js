var Link = require(process.cwd() + '/models/link.js')

var indexController = {

	index: function(req, res) {

		Link.find({}).sort({rank: -1}).exec(function(error, links) {
			res.render('index', {
				links: links
			});

		})

		// after the function, executed BEFORE the callback (async)

	},

	submit: function(req, res) {

		// POST: req.body
		// GET: req.query

		var link = new Link({
			url: req.body.newUrl.replace(/['"<>\\]/g, '')
		})

		link.save(function(error, result) {
			if(error) {
				console.log(error)
				res.send(500, 'Error saving link')
			}
			else {
				res.send(200)
			}
		})

	},

	list: function(req, res) {

		Link.find({}).sort({rank:-1}).exec(function(error, links) {

			res.send({
				links: links
			})

		})
	},

	vote: function(req, res) {

		var incAmount = req.body.voteType === 'up' ? 1 : -1;

		Link.findByIdAndUpdate(req.body.id, {
			$inc: { rank: incAmount }
		}, function(error, result) {

			if(error) {
				console.log(error)
				res.send(500)
			}
			else {
				res.send(200)
			}
		})

	}

};

module.exports = indexController;