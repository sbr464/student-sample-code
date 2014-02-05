$(function(){
	var data = {
		item: "cow",
		count: 10000000
	};
	var source = $('#item-count').html();
	var countTemplate = Handlebars.compile(source);

	$('body').prepend( countTemplate(data) );
});