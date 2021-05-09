const errorHandler = (err) => {
    if (err) {
        process.stderr.write(err.message + '\n' || err + '\n');
        process.exit(1);
    }
}

module.exports = errorHandler;
