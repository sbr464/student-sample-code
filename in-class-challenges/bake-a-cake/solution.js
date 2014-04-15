/*
1. Write a function 'cake' that takes a separate parameter for each ingredient (flour, egg, sugar, etc).

2. The function should return a string message that says "You have X ingredients" where X is the total number of ingredients that were passed in.

3. Call the function with concrete arguments to see the result.
*/
var cake = function(flour, egg, sugar) {
  var total = flour + egg + sugar;
  return "You have " + total + " ingredients";
};

/* Write a function that calculates the number of servings that a set of ingredients will yield. */
var calculateServings = function(flour, egg, sugar) {
  var total = flour + egg + sugar;
  var servings = Math.floor(total/9*4);
  return "This will serve " + servings + " people";
};

/* Write a function that returns both the total and servings. We have to package the value in an object because functions can only return a single value. */
var totalAndServings = function(flour, egg, sugar) {
  var total = flour + egg + sugar;
  var servings = Math.floor(total/9*4);
  return {
    "total": total,
    "servings": servings
  };
};