const CustomError = require('../extensions/custom-error')
const CODE_OF_A = 65;
const LETTERS_IN_ALPHABET = 26;

class VigenereCipheringMachine {

    constructor (type) {
        this.reverseType = type === false;
    }

	encrypt (message, key) {
		return this.encryptDecrypt(message, key, true)
	}
	
	decrypt (message, key) {
		return this.encryptDecrypt(message, key, false)
	}

    encryptDecrypt (message, key, encrypt) {
        if (message === undefined || key === undefined) throw new Error()

        let shift = 0;
		
        key = key
			.toUpperCase()
			.split``
			.map(c => c.charCodeAt(0) - CODE_OF_A);
			
        message = message
            .toUpperCase()
            .split``
            .map((item, i) => (/[A-Z]/.test(item))
                ? String.fromCharCode(
					(
						item.charCodeAt(0) 
						- CODE_OF_A 
						+ !encrypt * LETTERS_IN_ALPHABET 
						+ (encrypt * 2 - 1) * key[(i - shift) % key.length]
					)
                    % LETTERS_IN_ALPHABET
					+ CODE_OF_A)
                : (shift++, item));

        return this.reverseType 
			? message.reverse().join``
			: message.join``;
    }
}

module.exports = VigenereCipheringMachine
