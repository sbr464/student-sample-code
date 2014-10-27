// Our base candy model. Set the defaults
// so that if an item is created but we
// don't specify all the properties, the app
// won't necessarily break
var Candy = Backbone.Model.extend({
	defaults: {
		name: '',
		calories: 0,
		isPoisoned: false
	}
});