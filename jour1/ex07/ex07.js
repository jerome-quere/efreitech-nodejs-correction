var fs = require('fs');
var http = require('http');

const port = process.argv[2] || 8080;

const server = http.createServer(function (req, res) {
  if (req.url == "/")
      req.url = "/index.html";

  fs.createReadStream("." + req.url, {flag: "r"})
      .on("error", function (error) {
          res.statusCode = 404;
          res.end(error);
      })
      .on("open", function () {
          res.statusCode = 200;
      })
      .pipe(res)
  ;
});

server.listen(port, function (err) {
    if (err) throw err;
    console.log("Server running on port " + port);
});
