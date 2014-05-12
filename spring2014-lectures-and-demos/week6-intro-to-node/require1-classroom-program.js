// How to include a local file

// require will return the value of module.exports in the specified file
var classroom = require('./require1-classroom.js');

/*
uses normal unix paths
./		current folder
../		parent folder
/			system root
~			user root
*/

// now we can access the object that was defined in the other file!
console.log(classroom.students.join('\n'));
