// $(document).on('ready', function() { ... })
$(function() {

	// first argument: url to request
	// second argument: callback
	// callback gets a single argument: data (body of the http response)
	// data is the value from res.send on the server
	console.log('Ajax request made!')
	$.get('/users', function(data) {
		console.log('Response received!')

		// create an unordered list
		var list = $('<ul>');

		// create an array of list items from the list of names
		var listItems = data.map(function(name) {
			return $('<li>' + name + '</li>');
		})
		console.log('data:', data)
		console.log('listItems', listItems)

		// append the list items to the unordered list
		list.append(listItems)

		// append the list to the body
		$('body').append(list);
	})

})