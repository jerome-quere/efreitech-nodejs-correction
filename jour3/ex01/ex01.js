const fs = require('fs');

function readFile(path) {
    return new Promise((resolve, reject) => {
         fs.readFile(path, 'utf8', (err, content) => {
             if (err)
                 return reject(err);
             resolve(content);
        });
    });
}

readFile("./file.txt")
    .then((fileContent) => {
        return fileContent.replace(/\n/g, '$\n');
    })
    .then(console.log)
    .catch((err) => {
        console.error(err);
    })
;