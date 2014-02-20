var os = require('os');

console.log(os.hostname());
console.log(os.type());
console.log(os.arch());
console.log(os.release());

console.log(os.totalmem());

setInterval(function () {
  console.log(os.freemem());
}, 2000);