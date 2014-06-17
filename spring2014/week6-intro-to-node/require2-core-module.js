// How to require core modules

// Just specify the name of the module, without a relative path like ./
var fs = require('fs');

var loremText = fs.readFileSync('lorem.txt', 'utf-8');

var modText = loremText.replace(/dolor/g, 'doloroso');

fs.writeFileSync('lorem-modified.txt', modText);