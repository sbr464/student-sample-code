var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

var init = function() {
	var p = new Person('bilbo', 250);
	var o = {};

	o.createGollum = function() {
		var q = new Person('gollum', 300);

		console.log(o);
		console.log(p);
		console.log(q);
	};
	o.createGollum.prototype.p = 100;

	o.createGollum();
}

init();