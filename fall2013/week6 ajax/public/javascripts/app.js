var get = function(){
	$.get('/myjson', function(data){
		console.log(data)
		$students = $('#students')
		for(var i = 0; i < data.students.length; i++){
			$students.append('<li>'+data.students[i]+'</li>')
		}
	});	
};

// Fetch Tweets from server
var getTweets = function(){
	$.getJSON('/tweets', function(data){
		$tweets = $('#tweets')
		console.log(data)
		for(var i =0; i < data.statuses.length; i++){
			status = data.statuses[i].text
			$tweets.prepend('<li>'+status+'</li>')
		}
	})
};


$(function(){

	$('#get-twitter').on('click', function(){
		console.log('pulling twitter data ...')
		setInterval(function(){
			getTweets()
		}, 1000)

		getTweets()
	})


	console.log("READY!")

	$('#get-json').on('click', function(e){
		get()
	})


	$("#signup-form").submit(function(e){
		e.preventDefault()

		// Start the loader
		$('#loader').addClass('spin')

		//make a post request to our /signup endpoint
		$.post('/signup', $(this).serialize(), function(data){
			
			// stop the loader
			$('#loader').removeClass('spin')

			//if there was an error, show the error
			if(data.error){
				// add the error text to the error div
				$('#message').text(data.error)
			}

			// if the request returned a success message, display it.
			if(data.success){
				$('#message').text(data.success)
			}
		})
	});
	
});