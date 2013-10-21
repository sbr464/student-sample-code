$(function(){
	catsTemplate = Handlebars.compile($('#cats-template').html())
	$catsList = $('#cats')
	$('#add-cat').on('keyup', function(e){
		$el = $(this)
		if(e.keyCode === 13){
			$.post('/addcat', {catname : $el.val()}, function(responseMessage){
				$("#message").text(responseMessage);
				// update our cats list
				$catsList.html(catsTemplate({cats : responseMessage.cats}))

			});

			//clear the input
			$el.val('')
		}
	});
});
