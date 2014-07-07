// create a snake object using object literal notation
var snake = {

	// define a deadSkin property and set it equal to 100
  deadSkin: 100,

  // define a molt method on the snake object
  molt: function() {

  	// store the current value of the current snake's deadSkin into a local variable
    var original = this.deadSkin;

    // override the value of the current snake's deadSkin to 0
    this.deadSkin = 0;

    // return the original value (before it was set to 0)
    return original;
  },

  // define a slither method on the snake object
  slither: function() {

  	// increment the current snake's deadSkin property by 5
	  this.deadSkin += 5;

	  // print a message to the console
	  console.log('SSsssssss');
	}
};

// check the initial value of the snake's deadSkin property
console.log('initial snake.deadSkin:', snake.deadSkin);

// call the molt method of the snake
snake.molt()

// check that the snake's deadSkin value has been set to 0
console.log('after molt snake.deadSkin:', snake.deadSkin);
