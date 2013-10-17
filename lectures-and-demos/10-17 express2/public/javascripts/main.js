$(function() {

	$('.body-button').on('click', function() {

		// first argument: 		url
		// second argument: 	data
		// third argument: 		callback

		var data = {
			bodyPart: $(this).attr('data-part')
		};

		$.get('/getdiagnosis', data, function(str) {

			$('#diagnosis').text(str);

		});

	});

});