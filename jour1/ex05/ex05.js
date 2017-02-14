#!/bin/node

var fs = require('fs');

function usage() {
    console.log("Usage: ./ex05.js files ...");
    process.exit(1);
}

function main(argv) {
    if (process.argv.length != 2)
	usage();

    var srcPath = argv[0];
    var destPath = argv[1];

    fs.createReadStream(srcPath, {flags: 'r'})
        .pipe(fs.createWriteStream(destPath, {flag: 'w'}))
        .on("error", function (error) {
            console.error(error);
            process.exit(-1);
        })
    ;
}

process.argv.shift();
process.argv.shift();
main(process.argv);
