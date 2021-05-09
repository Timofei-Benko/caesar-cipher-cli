const args = require('minimist')(process.argv.slice(2));

const errorHandler = (err) => {
    if (err) {
        process.stderr.write(err.message + '\n');
        process.exit(1);
    }
}

const getArgsObject = (args) => {
    if (!args.a && !args.action) {
        errorHandler(new Error(`The tool requires '-a'/'--action' parameter to work`));
    }

    if (typeof args.a !== 'string' && typeof args.action !== 'string') {
        errorHandler(new Error(`Incorrect type of '-a'/'--action' parameter. Make sure it is a string`));
    }

    if (!args.s && !args.shift && args.s !== 0 && args.shift !== 0) {
        errorHandler(new Error(`The tool requires '-s'/'--shift' parameter to work`));
    }

    if (typeof args.s !== 'number' && typeof args.shift !== 'number') {
        errorHandler(new Error(`Incorrect type of '-s'/'--shift' parameter. Make sure it is an integer`));
    }

    if (args.s === 0 || args.shift === 0) {
        errorHandler(new Error(`'-s'/'--shift' parameter must be an integer greater than 0`));
    }

    return {
        action: args.a || args.action,
        shift: args.s || args.shift,
        inputPath: args.i || args.input,
        outputPath: args.o || args.output,
    }
}

module.exports = getArgsObject(args);
