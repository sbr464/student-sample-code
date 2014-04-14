var assert = function(a,b) {
  if(a !== b) {
    console.error('expected', a, 'to equal', b);
  }
  else {
    console.log('test passed!', a, 'equals', b);
  }
};