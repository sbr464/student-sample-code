var RecipeMaker = Backbone.View.extend({

	events: {
		'click .blend:not(.disabled)' : 'blend',
		'click .recipe-line' : 'remove'
	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
		this.renderTemplate = Handlebars.compile($('#recipe-maker-template').html());
	},

	blend: function(e) {
		var that = this;
		var blender = $(e.currentTarget);

		// this.trigger('blended');

		// start shakin'!
		blender
			.finish()
			.removeClass('shake-hard')
			.addClass('shake shake-slow shake-constant')
			.delay(1200)
			.queue(function(next) {
				$(this).removeClass('shake-slow');
			  next();
			})
			.delay(1600)
			.queue(function(next) {
				$(this).addClass('shake-hard');
			  next();
			})
			.delay(3200)
			.queue(function(next) {
				$(this).removeClass('shake').removeClass('shake-hard');
			  next();
			})
			.queue(function(next) {
				that.trigger('blended');
			  next();
			})

		// ugly setTimeout version
		// blender.addClass('shake shake-slow shake-constant')
		// setTimeout(function() {
		// 	blender.removeClass('shake-slow')
		// 	setTimeout(function() {
		// 	  blender.addClass('shake-hard');
		// 	  setTimeout(function() {
		// 	  	blender.removeClass('shake').removeClass('shake-hard');
		// 	  }, 3200)
		// 	}, 2000)
		// }, 1200)
	},

	showBlendedModal: function() {

		// create and show the modal
		var modalView = new RecipeBlendedModal({
			model: this.model
		});
		modalView.show();

		return modalView;
	},

	// decrement an ingredient, or remove it if it's the last one
	remove: function(e) {
		var recipeLineEl = $(e.currentTarget);
		var id = recipeLineEl.attr('data-id');
		var entry = this.model.getEntryById(id);
		entry.quantity--;
		this.model.clean();

		// needed in case the clean didn't trigger a change
		// does this cause two renders?
	  this.model.trigger('change', entry);
	},

	render: function() {
	  return this.$el.empty().append(this.renderTemplate(this.model.toJSON()));
	}

})