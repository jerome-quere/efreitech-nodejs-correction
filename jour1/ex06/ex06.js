const http = require('http');

const port = process.argv[2] || 8080;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

      var data = '';
      req.on('data', function (chunk) {
          data += chunk.toString();
      });

      req.on('end', function () {
          data = data || 'World';
          res.end('Hello ' + data + '\n');
      });
});

server.listen(port, function (err) {
    if (err) throw err;
    console.log("Server running on port " + port);
});
