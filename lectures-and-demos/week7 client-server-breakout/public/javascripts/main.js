$(function() {
	$('#go').on('click', function() {
		

		// First Argument: URL to request
		// Second Argument: Data to send to the server (optional)
		// Third Argument: Callback (when the response comes back from the server)
		// 	data = whatever is sent from the server using res.send
		$.get('/attend', { name: $('#name').val() }, function(data) {
			console.log('Data Received from server: ', data.openSlots);
		})

	})
})
