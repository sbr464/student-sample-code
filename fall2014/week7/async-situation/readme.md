# Async Situation

## Ok, here's the problem:
What if we have a list of things we want to loop through, such as an array, and we want to perform some asynchronous operation for each of those items. And then we want to do one operation (such as sending a result to the client) when all those operations have finished?

## That's definitely a problem.
The for loop will finish executing before even the first async operation completes, which could result in a premature response. Plus, what if the async operation doesn't take the exact same amount of time and iteration 1 finishes after iteration 5? Double awk.

## What can we do?
A couple things. We have closure (IIFE's), progress checking, async.js, and promises. The final two are libraries that we'd need to learn to make this work and can explore them separately. Let's look at the first two since they are the lowest hanging fruit.

# What to do in this project??

Look at each file in order:

* problem.js (what's the situation?)
* solution-part-1.js (how can we solve it?)
* solution-part-2.js (what's the rest of part 1?)
* solution-part-1-alt.js (another way using map)
* complex.js (a more complex example)
* async.js (using a library to help **requires running `npm install`**)
