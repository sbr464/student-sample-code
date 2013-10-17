$(function(){
	var source   = $("#search-results-template").html();
	var twitterTemplate = Handlebars.compile(source);
	$results = $('#results')

	$('#search').on('keyup', function(e){
		if(e.keyCode === 13){
			// do something
			var val = $(this).val()
			$.get('/searchtwitter', {search : val}, function(data){
				console.log(data)
				$results.html(twitterTemplate(data))
			});
		}
	});
});