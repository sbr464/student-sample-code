var add = function(x,y) {
	return x+y;
}

add.call(null, 2, 3)
// add.call(2, 3)
//   -> first argument to this
//		this = 2
//		x = 3
//		y = undefined

// equivalent:
add.apply(null, [2, 3])