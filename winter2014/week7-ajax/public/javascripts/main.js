$(function(){

	// REQUEST API ROUTE ON LOAD
	$.ajax('/api', {
		success: function(data){
			console.log(data);
		}
	});

	// REQUEST COUNTER VALUE ON CLICK
	$('#counter-btn').click(function(){
		$.ajax('/counter', {
			success: function(data){
				console.log('Data: ', data);
				$('#counter-val').text(data.counter);
			}
		});
	});
});