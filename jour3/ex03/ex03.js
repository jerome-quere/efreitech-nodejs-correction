const
    express = require('express'),
    getRedditPost = require('./getRedditPost.js')
;

const
    app = express(),
    port = 8080,
    thread = process.argv[2] || 'perfectloops'
;

app.set('view engine', 'pug');

app.get("/", function (req, res) {
    return getRedditPost(thread)
        .then((posts) => res.render('index', {posts: posts}))
        .catch((err) => res.status(500).json(err))
    ;
});

app.listen(port, function (err) {
    console.assert(!err, err);
    console.log("Listening on port " + port);
});

