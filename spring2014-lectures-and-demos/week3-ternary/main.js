$(document).on('ready', function() {
  
  // TERNARY
  var isAdmin = true;
  
  if(isAdmin){
    console.log('I\m an admin!');
  } else {
    console.log('I\m not an admin...');
  }

  console.log( (isAdmin)?'I\m an admin!':'I\m not an admin...' );

  $(this).addClass((i % 2 === 0)?'even': 'odd');
});