$(function(){
	catsTemplate = Handlebars.compile($('#cats-template').html())
	$catsList = $('#cats')
	$('#add-cat').on('keyup', function(e){
		$el = $(this)
		if(e.keyCode === 13){
			$.post('/addcat', {catname : $el.val()}, function(responseMessage){
				$("#message").text(responseMessage);
				// update our cats list
				$.get('/getallcats', function(cats){
					$catsList.html(catsTemplate({cats : cats}))
				})
			});

			//clear the input
			$el.val('')
		}
	});
});
