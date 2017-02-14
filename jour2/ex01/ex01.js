var express = require('express');

var app = express();
var port = process.argv[2] || 8080;

app.get("/", function (req, res) {
    res.end("Hello World!");
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log("Application listen on " + port);
});
