// THIS IS CLIENT SIDE ONLY

$(function(){

	// Event handler for clicks on update-numbers button
	$('#update-numbers').on('click', function(e){

		// Make an ajax GET request to the server
		$.get('/getNumber', {}, function(resultData){
			// received data from the server here
			console.log(resultData);

			// now append the number to the UL.
			// We res.send()'d an object from the
			// server, so our resultData is that same object
			$('#numbers').append('<li>' + resultData.number + '</li>');
		});

	});

	$('#update-numbers-five').on('click', function(e){
		// Make the same GET request, but this time
		// pass some data to the server in the requestData
		// argument object
		$.get('/getNumber', {count: 5}, function(resultData){
			// When getting multiple items via the request object
			// they will be sent from the server as an array.
			for (var i = 0; i < resultData.length; i++) {
				// Loop over each number result and append it to
				// the ul on our view
				$('#numbers').append('<li>' + resultData[i].number + '</li>');
			};
		});
	});

	// Allow the user to request a custom amount of numbers
	$('#update-numbers-custom').on('click', function(e){
		var customCount = $('#custom-count').val();

		$.get('/getNumber', {count: customCount}, function(resultData){
			for (var i = 0; i < resultData.length; i++) {
				$('#numbers').append('<li>' + resultData[i].number + '</li>');
			};
		});
	});

	// Polling - This will make a new request
	// 						every x amount of time by executing
	// 						this function via setInterval.
	setInterval(function(){
		$.get('/getNumber', {}, function(resultData){
			$('#numbers').append('<li>' + resultData.number + '</li>');
		});
	}, 1000);
});