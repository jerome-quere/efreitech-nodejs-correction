var http = require('http');

var number;
var nbGuess;
const port = process.argv[2] || 8080;


const server = http.createServer(function (req, res) {

    if (!number) {
        number = Math.floor(Math.random() * 999 + 1);
        nbGuess = 0;
    }

    var query = require('url').parse(req.url,true).query;
    if (!query.n)
        return res.end("Please provide a number\n");

    var guess = parseInt(query.n);
    nbGuess++;
    if (guess > number)
        res.end("Plus petit\n");
    else if (guess < number)
        res.end("Plus grand\n");
    else {
        res.end("Tu as trouvé en " + nbGuess + " coups\n")
        number = undefined;
    }
});

server.listen(port, function (err) {
    if (err) throw err;
    console.log("Server running on port " + port);
});
