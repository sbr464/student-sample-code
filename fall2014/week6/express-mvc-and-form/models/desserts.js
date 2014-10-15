// This is a globally accessible set of data
// to any file that require()s it. If the
// server restarts, this data will be reset
// to this original value.
var desserts = [
	{
		name: 'Tiramisu',
		flavor: 'Cinnamon',
		rating: 'Super good!',
		cost: 'Too much'
	},
	{
		name: 'Figgy Pudding',
		flavor: 'Figgy',
		rating: 'Disgusting',
		cost: '1 miiiiiillion dollars'
	},
	{
		name: 'Chocolate Covered Shrimp',
		flavor: 'Chocolatey Shrimpish',
		rating: '0',
		cost: 'Half Dollar'
	}
];

// Make sure this data is accessible via require
module.exports = desserts;
