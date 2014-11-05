// Bird model via backbone. We define a special
// property that helps backbone to be aware of our
// _id property from the database. We also define
// defaults to use whenever a new item is created.
var Bird = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: {
		name: 'Nameless Bird',
		isFlightless: false,
		edible: true,
		image: 'http://placehold.it/100x100'
	}
});