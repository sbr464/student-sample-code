var POLL_FREQUENCY = 1000

var renderLinks = function(links) {

	$('#links').empty().append(links.map(function(link) {

		var li = $('<li>').attr('data-id', link._id)
		var thumbsUp = $('<a class="vote" data-voteType="up">').append('<i class="icon-thumbs-up">')
		var thumbsDown = $('<a class="vote" data-voteType="down">').append('<i class="icon-thumbs-down">')
		var a = $('<a>')
			.attr('href', link.url)
			.text(link.url)
		li.append(thumbsUp, thumbsDown, link.rank + ' ', a)
		return li

	}))
}

$(function() {

	$('#submitForm').on('submit', function(e) {
		e.preventDefault();

		var textbox = $('[name=url]')
		var url = textbox.val();

		$.post('/submit', { 'newUrl': url }, function(data) {

			textbox.val('')

		})

	})

	$(document).on('click', '.vote', function(e) {
		e.preventDefault()
		var voteType = $(this).attr('data-voteType')
		var id = $(this).closest('li').attr('data-id')

		$.post('/vote', {
			voteType: voteType,
			id: id
		}, function() {

		})

	})

	renderLinks(links)

	// poll for new links
	setInterval(function() {

		$.get('/list', function(data) {
			renderLinks(data.links)
		})

	}, POLL_FREQUENCY)

})