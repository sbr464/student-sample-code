var source = '<h1>{{header}}</h1><p>{{content}}</p>';
var data = {
	header: 'Hello World',
	content: 'This is content about the world.'
};

var contentTemplate = Handlebars.compile(source);
console.log( contentTemplate(data) );