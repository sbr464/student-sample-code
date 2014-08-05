// Create a PastryView constructor that inherits from Backbone.View
var PastryView = Backbone.View.extend({

	className: 'pastry',
	tagName: 'span',

	events: {
		'click' : 'choosePastry'
	},

	choosePastry: function() {
		this.trigger('choose', this.model)
	},

	render: function() {
		var img = $('<img>').attr('src', 'images/pastry/' + this.model.get('shortName') + '.png')
		this.$el.empty().append(img)
	}

})

// PastryView.prototype.render = ...