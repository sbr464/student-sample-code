// var rootPath = require('../config.js').rootPath
var Product = require('../models/products.js')

var controller = {

	index: function(req, res) {

		parallel([
			async1,
			async2,
			async3,
		], function() {
			res.render('index', {
				coffeeProducts: products
			});
		})

		Cart.read(function(cart) {

		})
		Product2.list(function(product2list) {

		})
		Product.list(function(products) {
		})

	}

}

module.exports = controller
