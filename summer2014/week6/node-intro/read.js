// include the 'fs' core module
var fs = require('fs')

// read the file contents of the file specified in the third command line argument
var textContent = fs.readFileSync(process.argv[2], 'utf-8')

// print the contents of the file
console.log(textContent)