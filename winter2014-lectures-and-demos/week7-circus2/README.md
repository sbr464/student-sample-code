week7-circus attempted to build the smallest possible express app that connects to a Mongo database and interacts with it. Now that we have accomplished that, this revision introduces some architecture to make it more MVC-like:

* Move Mongoose Schema and Model code into /models
* Move route handlers into /controllers
* move express configuration into /config 
