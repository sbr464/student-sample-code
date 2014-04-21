$(document).on('ready', function() {
  
  var letters = 'code'.split('');

  // BACKWARDS LOOP:
  //  Start at the last index of the array
  //  since it is 0-based, subtract 1 from
  //  length.
  //  
  //  initializer - end of array
  //  conditional - run while i is positive
  //  iterator - keep subtracting one to move down
  //    the array
  for(var i = letters.length - 1; i >= 0; i--){
    console.log(i, letters[i]);
  }

  console.log('--------------------------');

  // FORWARDS LOOP
  for(var i = 0; i < letters.length; i++){
    console.log(i, letters[i]);
  }

  console.log('--------------------------');

  // print out "hello" 5 times, separate lines
  var iterCount = 5;
  for(var i = 0; i < iterCount; i++){
    console.log(i, 'Hello');
  }

  console.log('--------------------------');

  // print out 'hello' 5 times, same line
  var iterCount = 5;
  // initialize a running "counter"
  var output = '';
  // run the loop for the iterCount amount
  for(var i = 1; i <= iterCount; i++){
    // concatenate to output string "counter"
    output += i + 'hello';
    // long version...
    //  output = output + i + 'hello'
    //  
    // with numbers we can do:
    //  num = num + 1
    //  num += 1
    //  num++
  }

  // Print the aggregate output to the console
  console.log(output);

  console.log('--------------------------');

  // print out 'hello' 5 times, same line
  var iterCount = 5;
  // initialize a running "counter"
  var output = [];
  // run the loop for the iterCount amount
  for(var i = 1; i <= iterCount; i++){
    // push the square of i + hello to the
    // running array "counter"
    output.push( (i * i) + 'hello' );
    console.log(output);
  }

  // Print the aggregate output to the console
  console.log( output.reverse().join(', ') );

  console.log('--------------------------');

  // Example of a real-world for loop
  var users = [
    'John', 'Jacob', 'Jingleheimer', 'Schmidt'
  ];

  var sendMessage = function(message, user){
    console.log(user, ':', message);
  };

  for(var i = 0; i < users.length; i++){
    sendMessage('Hey there!', users[i]);
  }

  console.log('--------------------------');

  // same as above using map() and predefined vars
  users.map(function(user){
    sendMessage('Hey there!', user);
  });

  console.log('--------------------------');

  // Simple mapping function
  var ourMap = function(arr, method){
    for(var i = 0; i < arr.length; i++){
      method( arr[i] );
    }
  };

  ourMap(users, function(user){
    sendMessage('Hey there!', user);
  });
});