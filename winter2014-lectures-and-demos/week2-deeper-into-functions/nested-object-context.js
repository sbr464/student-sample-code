// var myObj = {
//   d: 10,
//   f1: function(){
//     console.log(this);
//     var f2 = function(){
//       console.log(this);
//       var f3 = function(){
//         console.log(this);
//       }
//       f3();
//     }
//     f2();
//   }
// };
// myObj.f1();

var myObj = {
  d: 10,
  f2: {
    g: 20,
    f3: function(){
      console.log(this);
    }
  },
  f1: function(){
    console.log(this);
    this.f2.f3();
  }
}
myObj.f1();