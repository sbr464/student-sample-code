console.log('============ THE SOLUTION: PART 2: COMPLETE COUNT ===========');


// We use this variable to know how many items
// to loop over, but also to know how many items
// should "complete" before moving on!
var count = 10;

// Helper to check if we've completed
// the right number of items
var completed = 0;
var checkCompleted = function(){
    completed++;
    if(completed >= count){
        console.log('All items completed!');
    }
};

for (var i = 0; i < count; i++) {
  console.log('loop i:', i);

  // use closure to contain the value of i
  // in a scope. This is an IIFE (Immediately
  // Invoked Function Expression)
  (function(index){
    setTimeout(function(){
      console.log('timeout index:', index);
      // Call checkCompleted to see if this is the
      // last item!
      checkCompleted();
    }, Math.random() * 10000);
  })(i);

}
console.log('Loop completed!');


// We've achieved the goal. With closure we can
// keep track of the value of "i" within the loop.
// By adding in the checkCompleted, we can now
// check to see if we have made it through each
// item whenever each one returns. If we have, we
// can move on to the last part.
