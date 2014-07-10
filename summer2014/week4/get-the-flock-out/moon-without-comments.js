var MoonGame = (function() {

	var Moon = function(colorForNewMoon) {
	this.color = colorForNewMoon;
	}
				
	Moon.prototype.create = function() {
		var element = $('<i class="moon icon-moon"></i>')
		element.css('color', this.color);
		return element;
	}

	var init = function() {
		var moon1 = new Moon('silver');
		var moon2 = new Moon('black');
		var moon3 = new Moon('red');
		var moon4 = new Moon('green');
		var moon5 = new Moon('blue');
		$('.sky').append(
			moon1.create(),
			moon2.create(),
			moon3.create(),
			moon4.create(),
			moon5.create()
		);

	}

	return {'init': init};
})();

$(document).on('ready', function() {
  MoonGame.init();
});