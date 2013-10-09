$(function() {

	$('.toggle').on('click', function clickHandler() {

		// Assign the current value of this (the .toggle button that was clicked on)
		// to a local variables so we can access it later in an inner function where
		// the value of this will be different.
		var that = this;

		console.log('click', this);
		$(this).hide();
		var container = $(this).closest('.form-container');

		var form = $('<form>');
		var textinput = $('<input class="form-control" type="text">')
		var submit = $('<input class="btn btn-default" type="submit" value="Submit">');

		form.append(textinput);
		form.append(submit);
		container.append(form);

		form.on('submit', function submitHandler() {
			container.append('<p>' + textinput.val() + '</p>');
			textinput.remove();
			submit.remove();
			console.log('submit', that);

			// Access the .toggle button that was clicked - the 'this' from the previous
			// scope, which is stored in 'that'. We have to do this here because 'this'
			// now refers to the form that was submitted.
			$(that).show();
			return false;
		});
	})

});

