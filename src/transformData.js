const stream = require('stream');

const cipher = require('./cipher');
const consoleArgs = require('./getConsoleArgs');

const transformData = new stream.Transform({objectMode: true});

transformData._transform = (chunk, encoding, callback) => {
    try {
        callback(
            null,
            cipher({
                action: consoleArgs.action,
                shift: consoleArgs.shift,
                str: chunk.toString(),
            })
        );
    } catch(err) {
        callback(err);
    }
};

module.exports = transformData;
