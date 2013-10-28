var socket = io.connect();

socket.on('message', function(message){
	$('#message').append('<div>'+message+'</div>')
});

$(function(){
	$('#message-text').on('keyup', function(e){
		$el = $(this)
		if(e.which === 13){
			socket.emit('message', $el.val())
			$el.val('')
		}
	});
});