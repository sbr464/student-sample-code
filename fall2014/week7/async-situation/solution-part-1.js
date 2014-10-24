console.log('============ THE SOLUTION: PART 1: CLOSURE ===========');

for (var i = 0; i < 10; i++) {
  console.log('loop i:', i);

  // use closure to contain the value of i
  // in a scope. This is an IIFE (Immediately
  // Invoked Function Expression)
  (function(index){
    setTimeout(function(){
      console.log('timeout index:', index);
    }, Math.random() * 10000);
  })(i);

}
console.log('Loop completed!');


// This is much better! We can see that the value
// for "i" is retained in the scope as "index". Now,
// when each timeout finally runs, at least we know
// the old value of "i" at that moment
