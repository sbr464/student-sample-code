$(document).on('ready', function(){
	$('#my-fav-el').on('click', function(){
		$(this).css({
			color: 'red',
			backgroundColor: 'green'
		});
	});
});

var myTestFunc = function(myInputVar1, myInputVar2){
	return myInputVar1 + myInputVar2;
};