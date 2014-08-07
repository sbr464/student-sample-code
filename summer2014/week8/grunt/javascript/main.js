$(function(){
	$('#my-elem').css({
		color: 'red',
		margin: 20
	}).on('click', function(){
		console.log('change this value');
	});
});