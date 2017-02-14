var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/goldenbook';
var bodyParser = require('body-parser');

var app = express();
var port = process.argv[2] || 8080;
var db = null;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", function (req, res) {
    db.collection('messages').find({}).toArray(function(err, messages) {
        if (err)
            return res.status(500).json(err);
        res.render('index', { messages: messages })
    });
});

app.post("/", function (req, res) {
    req.body.date = new Date();
    db.collection('messages').insertOne(req.body, function (err) {
        if (err)
            return res.status(500).json(err);
        res.redirect(302, "/");
    });
});


MongoClient.connect(url, function(err, mongoDb) {
    console.assert(!err, err);
    db = mongoDb;
    app.listen(port, function (err) {
        console.assert(!err, err);
        console.log("Listening on port " + port);
    });
});


