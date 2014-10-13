// The filesystem core module
// which allows us easier access
// to the file system.
var fs = require('fs');

// Synchronously read in a file's contents (make sure
// to specify the encoding or it'll come back as a buffer)
var fileContent = fs.readFileSync('file1.txt', 'utf-8');

// Reverse the contents of the loaded file
var reversedContent = fileContent
	.split('')
	.reverse()
	.join('');

// Print out the contents
console.log(reversedContent);

// Now write this to a new file called
// reversed.txt and fill it with the value
// from reversedContent
fs.writeFileSync('reversed.txt', reversedContent);