var RecipeMaker = Backbone.View.extend({

	events: {
		'click .blend:not(.disabled)' : 'blend',
		'click .recipe-line' : 'remove'
	},

	options: {
		shakeSlowDuration: 0,//1200,
		shakeDuration: 0,//1600,
		shakeHardDuration: 0//3200
	},

	initialize: function() {
		this.renderTemplate = Handlebars.compile($('#recipe-maker-template').html());
		this.setModel(this.model);
	},

	setModel: function(model) {
		this.stopListening(this.model);
		this.model = model;
		this.listenTo(this.model, "change", this.render);
		this.render();
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
			.delay(this.options.shakeSlowDuration)
			.queue(function(next) {
				$(this).removeClass('shake-slow');
			  next();
			})
			.delay(this.options.shakeDuration)
			.queue(function(next) {
				$(this).addClass('shake-hard');
			  next();
			})
			.delay(this.options.shakeSHardDuration)
			.queue(function(next) {
				$(this).removeClass('shake').removeClass('shake-hard');
			  next();
			})
			.queue(function(next) {
				that.trigger('blended', that.model);
				that.setModel(new Recipe());
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
		this.model.removeById(id);
	},

	render: function() {
	  return this.$el.empty().append(this.renderTemplate(this.model.toArray()));
	}

})