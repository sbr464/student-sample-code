$(function() {
	// $('.animal').on('click', ...
	$(document).on('click', '.animal', function(e) {
		var that = this;
		var id = $(this).attr('data-id');

		// make an ajax request to /baby
		$.post('/baby', { id: id }, function(baby) {
			// closure ensures that 'that' is defined
			// in the inner scope, even if the outer scope
			// is not being used anymore
			var babyImage = createBaby(baby);
			$(that).append(babyImage);
		});

	})

	/** Creates HTML for a baby animal. */
	function createBaby(baby) {
		return '<img src="/images/{name}.png" class="baby">'.supplant(baby);
	}
})