$(function() {

	$('.body-button').on('click', function() {

		// first argument: 		url
		// second argument: 	data (which gets sent to server)
		// third argument: 		callback (called after the server sends a response)

		var data = {
			bodyPart: $(this).attr('data-part')
		};

		$.get('/getdiagnosis', data, function(str) {

			$('#diagnosis').text(str);

		});

	});

});