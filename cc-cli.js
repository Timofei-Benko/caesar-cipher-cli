const fs = require('fs');
const { pipeline } = require('stream')

const consoleArgs = require('./src/getConsoleArgs');
const errorHandler = require('./src/errorHandler');
const trasformData = require('./src/transformData');

((inputPath, outputPath) => {
    let readStream;

    if (inputPath) {
        fs.access(inputPath, fs.F_OK, (err) => {
            if (err) {
                errorHandler(err);
            }
        });
        readStream = fs.createReadStream(inputPath);
    } else {
        readStream = process.stdin;
    }

    let targetStream;

    if (outputPath) {
        fs.access(outputPath, fs.F_OK, (err) => {
            if (err) {
                errorHandler(err);
            }
        });
        targetStream = fs.createWriteStream(outputPath, { flags: 'a' });
    } else {
        targetStream = process.stdout;
    }

    pipeline(readStream, trasformData, targetStream, (err) => {
        if (err) {
            process.stderr.write(err.message + '\n');
            process.exit(1);
        }
    });
})(consoleArgs.inputPath, consoleArgs.outputPath);
