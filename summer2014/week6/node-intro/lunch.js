// include a "library"
// require alwyas returns the value of module.exports from the included file
var myMenu = require('./menu.js')
// analogous to: <script src='menu.js'></script>
// but doesn't add anything to the global scope

console.log(myMenu.lunchMenu);

// access the command line arguments with process.argv
// slice the command line arguments starting at index 2 in order to just get the user-entered arguments (the first two arguments are always 'node' and 'FILENAME')
var lunchItems = process.argv.slice(2)

if(lunchItems.length === 0) {
	console.log('You must order at least one item!')
}
else if(lunchItems.length > 3) {
	console.log('You must be hungry! But you can\'t order more than 3 things...');
}
else {
	console.log('Yummm! That sounds good. You have ordered:\n' + lunchItems.join('\n'))
}

