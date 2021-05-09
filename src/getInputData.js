const fs = require('fs');

const errorHandler = require('./errorHandler');

const getInput = (path) => {
    let readerStream;

    if (path === undefined) {
        readerStream = process.stdin;
    } else {
        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                errorHandler(err);
            }
        });

        readerStream = fs.createReadStream(path);
    }

    readerStream.setEncoding('utf-8');
    const chunks = [];

    return new Promise((resolve, reject) => {
        readerStream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        readerStream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
};

module.exports = getInput;
