#!/bin/node

var fs = require('fs');

function usage() {
    console.log("Usage: ./ex03.js files ...");
    process.exit(1);
}

function main(argv) {
    if (argv <= 0)
	usage();

    var filePath = argv[0];
    fs.readFile(filePath, {encoding: 'utf8'}, function (err, content) {
        if (err) {
            console.log("Can't read file " + filePath);
            process.exit(-1);
        }
        console.log(content);
    });
}

process.argv.shift();
process.argv.shift();
main(process.argv);
