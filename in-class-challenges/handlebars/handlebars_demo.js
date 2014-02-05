var source = "My favorite activity is {{activity}} and I enjoy it because {{reason}}.";
var data = {
	activity: 'playing videogames',
	reason: 'why not'
};
var data2 = {
	activity: 'sleeping',
	reason: 'reenergizing'
};

var template = Handlebars.compile(source);
// console.log( template );

console.log( template(data) );
console.log( template(data2) );