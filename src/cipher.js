function cipher(action = 'ENCODE', str, shift) {

    if (action === 'DECODE') {
        shift *= -1;
    }

    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let isLowerCase = str[i] === str[i].toLowerCase();

        let char = str[i].toLowerCase();
        let index = ALPHABET.indexOf(char);

        if (index === -1) {
            result += char;
            continue;
        }

        let encodedIndex = (index + shift) % ALPHABET.length;

        if (encodedIndex < 0) encodedIndex += ALPHABET.length;

        if (isLowerCase) result += ALPHABET[encodedIndex];
        else result += ALPHABET[encodedIndex].toUpperCase();
    }

    return result;
}

module.exports = cipher;