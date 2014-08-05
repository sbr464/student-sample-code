// simulate a database
var db = (function() {

	var pastries = [
		new Pastry({ name: 'Bunt Cake', shortName: 'bunt-cake' }),
		new Pastry({ name: 'Choco Donut', shortName: 'choco-donut' }),
		new Pastry({ name: 'Croissant', shortName: 'croissant' }),
		new Pastry({ name: 'Cupcake', shortName: 'cupcake' }),
		new Pastry({ name: 'Doughy Thing', shortName: 'doughy-thing' }),
		new Pastry({ name: 'Fancy Cake', shortName: 'fancy-cake' }),
		new Pastry({ name: 'Fruit Thing', shortName: 'fruit-thing' }),
		new Pastry({ name: 'Green Cake', shortName: 'green-cake' }),
		new Pastry({ name: 'Layered Cherry Cake', shortName: 'layered-cherry-cake' }),
		new Pastry({ name: 'Mini Cake', shortName: 'mini-cake' }),
		new Pastry({ name: 'pie-crust', shortName: 'pie-crust' }),
		new Pastry({ name: 'pink-filler-cake', shortName: 'pink-filler-cake' }),
		new Pastry({ name: 'Roll', shortName: 'roll' }),
		new Pastry({ name: 'Slice of Pie', shortName: 'slice-of-pie' }),
		new Pastry({ name: 'Strawberry Shortcake', shortName: 'strawberry-shortcake' }),
		new Pastry({ name: 'Sweet Roll', shortName: 'sweet-roll' }),
		new Pastry({ name: 'Three Buns', shortName: 'three-buns' }),
		new Pastry({ name: 'Whoopie Pie', shortName: 'whoopie-pie' })
	]

	return {
		Pastry: {
			find: function(callback) {
				callback(null, pastries)
			}
		}
	}

})()