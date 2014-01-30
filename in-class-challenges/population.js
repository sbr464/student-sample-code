var city = {
	name: 'Boulder',
	population: 101808
}

var size = function() {
	if(this.population > 100000) {
		return 'large';
	}
	else if(this.population > 25000) {
		return 'medium';
	}
	else {
		return 'small';
	}
}

console.log('City size:', size.call(city));