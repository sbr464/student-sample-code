$(function(){

	$('.items li').each(function(ind, element){
		console.log(ind, this, element);

		var listItem = $(this);

		var rootColor = ind * 50;
		listItem.css({
			color: 'rgb('+rootColor+','+rootColor+','+rootColor+')'
		});
	});


	$('.carousel').each(function(ind, el){
		var carousel = $(this);
		carousel.find('li').addClass('hidden').first().removeClass('hidden');
		carousel.attr('data-current-slide', ind);
		carousel.find('li').on('click', function(){
			console.log(carousel, carousel.attr('data-current-slide'));
		})
	});

});