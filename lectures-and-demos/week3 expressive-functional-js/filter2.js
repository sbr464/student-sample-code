var myObjects = [{a:1, b:2},  {a:2, b: 10},  {a:2, b: 500}];

filteredObjects = filter(myObjects, function(o) {
  if(o.b < 100) {
    return true;
  }
  else {
    return false;
  }
});

console.log(filteredObjects);