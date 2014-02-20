var http = require('http'); // load the HTTP module

http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Moto</h1>');
}).listen(8080, '127.0.0.1');

console.log('Server running...');