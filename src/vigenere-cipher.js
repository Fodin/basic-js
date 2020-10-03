const CustomError = require('../extensions/custom-error')
const CODE_OF_A = 65;
const LETTERS_IN_ALPHABET = 26;

class VigenereCipheringMachine {

    constructor (type) {
        this.reverseType = type === false;
    }

    encrypt (message, key) {
        if (message === undefined || key === undefined) {
            throw new Error()
        }

        let shift = 0;
        key = key.toUpperCase().split``.map(c => c.charCodeAt(0) - CODE_OF_A);
        message = message
            .toUpperCase()
            .split``
            .map((item, i) => (/[A-Z]/.test(item))
                ? String.fromCharCode((item.charCodeAt(0) - CODE_OF_A + key[(i - shift) % key.length])
                        % LETTERS_IN_ALPHABET + CODE_OF_A)
                : (shift++, item));

        return this.reverseType ? message.reverse().join`` : message.join``;
    }

    decrypt (message, key) {
        if (message === undefined || key === undefined) {
            throw new Error()
        }

        let shift = 0;
        key = key.toUpperCase().split``.map(c => c.charCodeAt(0) - CODE_OF_A);
        message = message
            .toUpperCase()
            .split``
            .map((item, i) => (/[A-Z]/.test(item))
                ? String.fromCharCode((item.charCodeAt(0) - CODE_OF_A + LETTERS_IN_ALPHABET - key[(i - shift) % key.length])
                        % LETTERS_IN_ALPHABET + CODE_OF_A)
                : (shift++, item));

        return this.reverseType ? message.reverse().join`` : message.join``;
    }
}

module.exports = VigenereCipheringMachine
