var orchard = [
	'pear',
	'mango',
	'mango',
	'mango',
	'starfruit',
	'mango'
];

module.exports = {
	findAll: function() {
		return orchard.slice();
	},
	find: function(fruit) {
		return orchard.filter(function(tree) {
			return tree === fruit;
		});
	}
};
