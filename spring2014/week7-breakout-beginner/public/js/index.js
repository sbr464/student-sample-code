$(function() {

	$('#weather').on('click', function() {
		
		// data is coming from res.send
		$.get('/weather', function(data) {
			
			$('body').append('The current temperature is ' + data.temperature);

		});

		return false;
	});

});