#!/bin/node

var fs = require('fs');

function usage() {
    console.log("Usage: ./ex03.js files ...");
    process.exit(1);
}

function main(argv) {
    if (argv.length <= 0)
	    usage();

    var print = console.log;
    if (argv[0] == "-E") {
        argv.shift();
        print = function (data) {
            console.log(data.replace(/\n/g, "$\n"));
        }
    }
    var filePath = argv[0];
    try {
        fs.accessSync(filePath, fs.constants.R_OK);
        print(fs.readFileSync(filePath, { encoding: 'utf8' }));
    } catch (error) {
        console.log("Can't read file " + filePath);
    }
}

process.argv.shift();
process.argv.shift();
main(process.argv);
