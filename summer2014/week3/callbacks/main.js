$(document).on('ready', function() {
  var printer2 = function(itemToPrint){
    console.log('2+', itemToPrint);
  }
  var printer = function(itemToPrint){
    console.log(itemToPrint);
    return printer2;
  }

  $(document).on('click', printer('test value...'));

  $(document).on('click', function(a){
    console.log(variableSomething);
  })

});

// SAMPLE HAND-CALLED CALLBACKS

var adder = function(a, b){
  return a() + b;
}

var valC = function(){
  return 50;
}

var valA = 10;
var valB = 20;

console.log( adder );
// console.log( adder(valA, valB) );
console.log( adder(valC, valB) );

// SAMPLE MAP FUNCTION

var list = [1,2,3,4];
var printer = function(itemToPrint){
  console.log(itemToPrint);
}

var printer2 = function(itemToPrint){
  console.log('2+' + itemToPrint + '+2');
  return itemToPrint * 2;
}


// FAKE MAP FUNCTION
var map = function(target, itemAction){
  var result = [];
  for (var i = 0; i < target.length; i++) {
    var itemResult = itemAction(target[i]);
    result.push(itemResult);
  };
  return result;
}

var result = map( list, printer2 );
console.log(result)


// Using callbacks with timeOut
// 

var testPrint = function(val){
  console.log('Setting up:', val)
  return function(){
    console.log(val);
  }
}

var items = [1,2,3,4];
for (var i = 0; i < items.length; i++) {
  /*setTimeout(function(){
    console.log('Called on:', i);
  }, 2000 * i);*/
  setTimeout(testPrint(i), 2000 * i);
};


// ASYNC DEMO CODE
async.parallel([
  function(cb){cb(null, 'data1')},
  function(cb){
    setTimeout(function(){
      cb(null, 'data2')
    }, 2000);
  },
  function(cb){cb(null, 'data3')}
], function(err, data){
  console.log(data);
});


// ASYNC WATERFALL
async.waterfall([
  function(cb){
    console.log('f1:', arguments);
    cb(null, 'test1', 'test2');
  },
  function(arg1, arg2, cb){
    console.log('f2:', arguments);
    if(arg1 === 'test1'){
      cb(null, 'test3', 'test4', 'test5')
    }else{
      cb(null, 'something else')
    }
  }
], function(err, data){
  console.log('DONE:', arguments);
})


// SWITCH

var val = 10;

if(val === 5){
  console.log('val1')
} else if(val === 6) {
  console.log('val2')
} else if(val === 8) {
  console.log('val3')
} else {
  console.log('val4')
}

switch(val){
  case 5:
    console.log('val1')
    break;
  case 6:
    console.log('val2')
    break;
  case 8:
    console.log('val3')
    break;
  default:
    console.log('val4')
}