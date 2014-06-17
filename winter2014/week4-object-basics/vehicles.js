// Vehicle base class
var Vehicle = function(name, color, passengers){
    this.name = name;
    this.color = color;
    this.passengers = passengers;
    this.exhaustSound = "Whoompf?";

    this.move = function(){
        console.log("Vroom vroom!");
    }
};

// Add a "honk" method to the Vehicle class
Vehicle.prototype.honk = function(){
    console.log('Honk Honk!');
};

// Car class (inherits from Vehicle)
var Car = function(carColor, carName, passengers, horsePower, engine){
    // Call the Vehicle "constructor" by passing along the parameters
    Vehicle.call(this, carName, carColor, passengers);

    this.horsePower = horsePower;
    this.engine = engine;
};

// Where inheritance happens (from vehicle)
Car.prototype = new Vehicle();


// The Jetpack class, which also inherits from vehicle
var Jetpack = function(name, altitude, price){
    // Call the Vehicle "constructor" by passing (and forcing) values
    Vehicle.call(this, name, 'gunmetal grey', 1);

    this.altitude = altitude;
    this.price = price;

    // Override the exhaustSound property set via the Vehicle constructor
    this.exhaustSound = 'Swoosh!';

    this.takeoff = function(){
        console.log(this.altitude);
    }
}

// Where inheritance from Vehicle happens
Jetpack.prototype = new Vehicle();

// Create an instance of the Vehicle class
var bike = new Vehicle('Huffy', 'green', 1);

// Create an instance of the Car class (which inherits from Vehicle)
var astonMartin = new Car(510, 'v12', 'vanquish', 'silver', 4);

// Create an instance of the Jetpack class (which inherits from Vehicle)
var jetPack = new Jetpack('The X1', 20, 105000);