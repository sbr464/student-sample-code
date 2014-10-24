console.log('============ THE SOLUTION: COMPLEX EXAMPLE ===========');

// Let's look at a more complex situation where
// we have a separate function that needs to be
// called and we have an array of objects that
// have some action that needs to be performed
// on them.

var data = [
    {name: 'Chris'},
    {name: 'Raine'},
    {name: 'Sean'},
    {name: 'Dorian'}
];

// This is some operation that is asynchronous,
// such as translating a word, or making some
// API call, that is more complex than just some
// math or string transformations
var complexAsyncAction = function(original, onComplete){
    setTimeout(function(){
        console.log('timeout original:', original);

        original.completed = true;

        // since this is asynchronous, we need to let
        // the caller know when the operation is done.
        // Since we can't use "return" we need to make
        // use of our own callbacks, such as the one we
        // pass to "onComplete" later on when we call
        // "complexAsyncAction".
        onComplete();

    }, Math.random() * 10000);
};

// perform the operations, and, when they
// have all completed, we'll make a console.log call
var checkCompleted = function(){
    // this will filter our data down
    // to only the items who do NOT have a
    // "completed" property set, meaning they
    // haven't returned from their complicated
    // async operation...
    var remaining = data.filter(function(item){
        return item.completed === undefined;
    });

    if(remaining.length === 0){
        // If there are no more remaining items,
        // we can be certain that they have all finished!
        console.log('Completed!');
        console.log(data);
    }
};

// Now let's initialize the loop
data.map(function(item){
    complexAsyncAction(item, function(){
        // After this operation finishes,
        // check to see if all of the other
        // ones are done too
        checkCompleted();
    });
});
