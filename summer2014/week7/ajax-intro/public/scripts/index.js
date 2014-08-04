$(function() {

	$('#random').on('click', function(e) {
		
		e.preventDefault();

		// make an HTTP request to http://localhost:PORT/numbers
		// when the response comes back, the callback will be invoked with the results
		// pass data to the server with the optional second argument (must be an object)
		$.get('/numbers', { n: 10 }, function(data) {

			// How to access http request data in route handler (server-side, NOT client-side):
			// POST: req.body.n
			// GET:  req.query.n
			
			$('#numbers').append(data.numbers.map(function(n) {
				return $('<li>').text(n);
			}))

		})

	})

})