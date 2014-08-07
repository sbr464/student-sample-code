var OrderView = Backbone.View.extend({

	initialize: function(args) {
		this.options = args.options

		this.listenTo(this.collection, 'all', this.render)
	},

	choosePastry: function(pastry) {
		this.trigger('choose', pastry)
	},

	render: function() {
		var self = this;
		var heading = $('<h1>').text(this.options.heading)
		var items = this.collection.map(function(pastry) {

			var view = new PastryView({ model: pastry })
			self.listenTo(view, 'choose', self.choosePastry)
			view.render()
			return view.$el

		})
		this.$el.empty().append(heading, items)
	}

})