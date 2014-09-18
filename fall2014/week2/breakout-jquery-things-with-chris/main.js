$(document).on('ready', function() {

	// This is the after DOM creation method of jQuery
	$('.tester').after('<div>I come after the div</div>');

	/*
		THIS IS LESS MAINTAINABLE BECAUSE CSS IS IN OUR JS
	$('li').css({
		color: 'red',
		textDecoration: 'underline'
	});

	$('li').css('color', 'red');
	$('li').css('textDecoration', 'underline');

	$('li').css('color', 'red').css('textDecoration', 'underline');*/

	// THIS IS BETTER BECAUSE CSS STAYS WHERE IT SHOULD
	// $('li:nth-child(3)').addClass('list-item-alt');
	// $('li:odd').addClass('list-item-alt');

	var oddLis = $('li:odd');
	var evenLis = $('li:even');
	var classToUse = 'list-item-alt';

	console.log('Odd LIs:', oddLis);
	console.log('Even LIs:', evenLis);


	/*
		Demo function that will swap even and odd elements
		by giving them a class and then removing it each
		second via setInterval
	 */
	var toggle = true;
	setInterval(function(){
		oddLis.add(evenLis).removeClass(classToUse);
		if(toggle)
			oddLis.addClass(classToUse);
		else
			evenLis.addClass(classToUse);

		toggle = !toggle;

	}, 1000);







	//////////////////////////////////////////
	// PREVIEW OF EVENT LISTENERS/HANDLERS //
	//////////////////////////////////////////

	// $('button').click(function(){});
	// $('button').on('click', function(){});
	// $(document).on('click', 'button', function(){});
	// $('button').on('mouseover', function(){});
	// $('button').on('mouseout', function(){});
	// $('button').hover(function(){}, function(){});

	////////////////////////
	// Traversal Preview //
	////////////////////////
	
	// $('p button').first()
	// $('p').children('button')

	// use case for traversal
	/*
		<div class="movies">
			<div class="movie-item">
				<h1>My Movie</h1>
				<div class="featured">
					<button class="add-to-cart">Add to cart</button>
				</div>
			</div>
		</div>
	*/

	/*$('.movie-item .add-to-cart').on('click', function() {
		var currentTitle = $(this).closest('.movie-item').find('h1').first();
	});

	// Strict coupling...
	$(this).parent().parent().siblings('h1');
	// Less strict coupling...
	$(this).closest('container').find('h1')


	// Using "eq"
	$('li:eq(5)')
	$('li').eq(5)*/
});