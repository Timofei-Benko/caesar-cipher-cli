const cipher = (args) => {

    if (args.action === 'DECODE') {
        args.shift *= -1;
    }

    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';

    for (let i = 0; i < args.str.length; i++) {
        let isLowerCase = args.str[i] === args.str[i].toLowerCase();

        let char = args.str[i].toLowerCase();
        let index = ALPHABET.indexOf(char);

        if (index === -1) {
            result += char;
            continue;
        }

        let encodedIndex = (index + args.shift) % ALPHABET.length;

        if (encodedIndex < 0) encodedIndex += ALPHABET.length;

        if (isLowerCase) result += ALPHABET[encodedIndex];
        else result += ALPHABET[encodedIndex].toUpperCase();
    }

    return result;
}

console.log(cipher({
    action: 'DECODE',
    str: 'Aopz pz h zljyla! :)',
    shift: 7,
}))

module.exports = cipher;