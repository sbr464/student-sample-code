console.log('============ THE SOLUTION: PART 1: MAP ===========');


// Map automatically creates closure, so we can
// replace the for loop with map instead, but
// only if we have something to loop over.

var elements = ['Item 1', 'Item 2', 'Item 3'];

elements.map(function(item){
    console.log('map item:', item);

    setTimeout(function(){
        console.log('timeout item:', item);
    }, Math.random() * 10000);
});

console.log('Loop completed!');
