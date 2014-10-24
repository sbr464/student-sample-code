/*

  Ok, here's the problem:
    What if we have a list of things
    we want to loop through, such as an array,
    and we want to perform some asynchronous
    operation for each of those items. And then
    we want to do one operation (such as sending
    a result to the client) when all those
    operations have finished?

    That's definitely a problem. The for loop will
    finish executing before even the first async
    operation completes, which could result in a
    premature response. Plus, what if the async
    operation doesn't take the exact same amount of time
    and iteration 1 finishes after iteration 5? Double awk.

  What can we do?
    A couple things. We have closure (IIFE's), progress checking,
    async.js, and promises. The final two are libraries that
    we'd need to learn to make this work and can explore them
    separately. Let's look at the first two since they are the
    lowest hanging fruit.

 */

// Ok, part 1: the actual problem
console.log('============ THE PROBLEM ===========');

for (var i = 0; i < 10; i++) {
  console.log('loop i:', i);

  // Fire a timeout after a random
  // amount of time between 0-10 seconds
  setTimeout(function(){
    console.log('timeout i:', i);
  }, Math.random() * 10000);
}
console.log('Loop completed!');

// So you can see from the console.logs in terminal that
// the loop i's all looked nice and right, but the setTimeout
// ones are not quite right. They all show "10" and way after the loop
// complete logs.
