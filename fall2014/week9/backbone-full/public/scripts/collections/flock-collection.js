// Create a collection that will contain our list
// of birds by specifying which model to use.
// The "url" property helps backbone to construct
// the proper CRUD calls to the server, like when
// we call create().
var Flock = Backbone.Collection.extend({
	model: Bird,
	url: '/birds'
});