var Car = function(name, color, wheels){
  if(arguments.length === 1){
    // assume the item is a separate car object
    var original = name;
    for(var prop in original){
      if(typeof original[prop] !== 'function')
        this[prop] = original[prop];
    }
  } else {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
};
Car.prototype.getDetails = function() {
  return 'Name: ' + this.name + '\n' +
         'Color: ' + this.color + '\n' +
         'Wheels: ' + this.wheels;
};

// PREPOPULATE THE LOCALSTORAGE:
// var myCar = new Car('Blue Betty', 'red', 6);
// var carStr = JSON.stringify(myCar);
// localStorage.setItem('car', carStr);

var rawLoadedCar = JSON.parse( localStorage.getItem('car') );
// HAND-SET EACH PROP
// var loadedCar = new Car(
//   rawLoadedCar.name,
//   rawLoadedCar.color,
//   rawLoadedCar.wheels
// );

// ALTERNATIVE CONSTRUCTOR
var loadedCar = new Car(rawLoadedCar);
console.log(loadedCar);



$(document).on('ready', function() {

  // Load the message
  var loadedMessage = localStorage.getItem('message');
  if(loadedMessage !== null) {
    $('.message').text(loadedMessage);
  }

  // Edit the message (admin page)
  $('#edit-form').on('submit', function(){
    var messageField = $(this).find('[name=message]');
    var message = messageField.val();
    localStorage.setItem('message', message);
    messageField.val('');
    return false;
  });

});