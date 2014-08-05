var createShirtHtml;

var factoryShirt;
var shirts = [];

// Creates an object with two properties, text and color, to be used in the Handlebars template.
var Shirt = function(text, color) {
	this.text = text || 'HI'
	this.color = color || 'black';
}

// Replaces the factory shirt at the top of the page with a new shirt, by re-rendering the template
var replaceShirt = function(shirt) {

	// 3. Render the template
	var newShirtHtml = createShirtHtml(shirt);

	// 4. Insert into DOM
	$('#factory-shirt').html(newShirtHtml)
}

// Render a list of shirts inside the #shirts element
var appendShirt = function(shirt) {

	// 3. Render the template
	var newShirtHtml = createShirtHtml(shirt);

	// 4. Insert into DOM
	$('#shirts').append(newShirtHtml)
}

$(document).on('ready', function() {
  
	// FIRST TWO STEPS: once when page loads

	// 1. Retrieve the text of the template
	var shirtTemplateHtml = $('#shirt-template').html()
	// var shirtTemplateHtml = "<i class=\"icon-t-shirt shirt\"></i>"

	// 2. Compile the template
	createShirtHtml = Handlebars.compile(shirtTemplateHtml);

	factoryShirt = new Shirt()
	replaceShirt(factoryShirt)

	// EVENT HANDLERS
	$('#shirt-form input[type=text]').on('input', function() {

		var text = $('input[name=text]').val();
		var color = $('input[name=color]').val();
		factoryShirt = new Shirt(text, color);
		replaceShirt(factoryShirt)

	})

	$('#shirt-form').on('submit', function(e) {
		e.preventDefault();

		shirts.push(factoryShirt)
		appendShirt(factoryShirt)

	})

});