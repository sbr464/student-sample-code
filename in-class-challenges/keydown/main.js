$(document).on('ready', function() {

	$('#message').on('keyup', function() {
		var message = $(this).val();
		$('#mirror').text(message);
		$('#remaining').text(140 - message.length);
	})

});