var productsArray = [
	{
		name: 'Dark Roast',
		price: 1.92,
		origin: 'Brazil'
	},
	{
		name: 'Darker Roast',
		price: 2.5,
		origin: 'Vietnam'
	},
	{
		name: 'Lightest Roast',
		price: 1.2,
		origin: 'Indonesia'
	},
	{
		name: 'Lighter Roast',
		price: 3.92,
		origin: 'Colombia'
	},
	{
		name: 'Light Roast',
		price: 2.3,
		origin: 'Ethopia'
	}
]

// Product model object
var Product = {
	list: function(callback) {

		var results;

		setTimeout(function() {
			callback(productsArray)
		}, 2000)

		// anything here, ALWAYS is executed BEFORE the asynchronous call completes
	}
}


module.exports = Product