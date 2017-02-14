var express = require('express');
var request = require('request');

var app = express();
var port = process.argv[2] || 8080;

app.set('view engine', 'pug');

app.get("/", function (req, res) {

    var r = {
        uri: "https://www.reddit.com/r/perfectloops.json",
        json: true
    };

    request(r, function (err, response, body) {
        if (err)
            return res.status(500).json(err);

        var urls = [];
        body.data.children.forEach(function (post) {
            if (post.data.url) {
                urls.push(post.data.url);
            }
        });

        return res.render('index', {posts: urls});
    });
});

app.listen(port, function (err) {
    console.assert(!err, err);
    console.log("Listening on port " + port);
});

