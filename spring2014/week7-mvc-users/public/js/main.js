$(document).on('ready', function(){

	// Listen for new user submit
	$('#newuser').on('submit', function(e){
		// stop form from submitting
		e.preventDefault();

		// Post the form data via ajax to the server
		$.post('/user/add', $(this).serialize(), function(data){
			console.log('User:', data);
		});
	});

});