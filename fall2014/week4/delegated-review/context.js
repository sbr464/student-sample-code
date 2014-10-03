var testFunc = function(){
	console.log('Test:', this);
};

var ob = {
	obFunc: function(){
		console.log('Ob.obFunc:', this);

		var aVar = 'Test';
		var tf = function(arg1, arg2){
			console.log('tf() aVar:', aVar);
			console.log('Ob.obFunc() > tf():', this);
		};
		// tf();
		// tf.call(this, 'a', 'b');
		tf.apply(this, ['a', 'b']);
	}
};


var handlers = {
	demoProp: 'Hello!',
	onClick: function(){
		console.log(this, this.demoProp);
	}
};
// $('button').on('click', handlers.onClick);
$('button').on('click', handlers.onClick.bind(handlers));